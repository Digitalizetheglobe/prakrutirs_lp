import emailjs from '@emailjs/browser';
import { LEAD_CONFIG } from '../config/leadConfig';

/**
 * Send lead details to Google Sheets via Google Apps Script Web App (Frontend Only)
 */
export async function sendToGoogleSheet(data) {
  const url = LEAD_CONFIG.googleSheet.scriptUrl;
  if (!url || url === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
    console.warn('[LeadService] Google Sheet script URL is not configured.');
    return { success: false, reason: 'URL not configured' };
  }

  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const name = data.full_name || data.name || '';
    const phone = data.mobile_number || data.phone || '';
    const email = data.email_address || data.email || '';
    const message = data.message || '';

    // Using FormData is the most reliable way for Google Apps Script with mode: 'no-cors'
    const formData = new FormData();
    formData.append('timestamp', timestamp);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    console.log('[LeadService] Lead successfully forwarded to Google Sheet');
    return { success: true };
  } catch (error) {
    console.error('[LeadService] Failed to send to Google Sheet:', error);
    return { success: false, error };
  }
}

/**
 * Send lead notification email using EmailJS (Frontend Only)
 */
export async function sendToEmailJS(data) {
  const { serviceId, templateId, publicKey } = LEAD_CONFIG.emailjs;
  if (!publicKey || publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
    console.warn('[LeadService] EmailJS public key is not configured.');
    return { success: false, reason: 'EmailJS not configured' };
  }

  const name = data.full_name || data.name || '';
  const phone = data.mobile_number || data.phone || '';
  const email = data.email_address || data.email || 'Not provided';
  const message = data.message || 'No message provided';
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const templateParams = {
    name: name,
    phone: phone,
    email: email,
    message: message,
    time: time,
    // Aliases for compatibility
    user_name: name,
    user_phone: phone,
    user_email: email,
    plot_size: data.property_type || data.plotSize || 'NA Plot',
    location: data.location || 'Prakriti - Near Takve, Pune',
    form_source: data.form_source || 'Website Form',
    submission_time: time,
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('[LeadService] Email sent successfully via EmailJS:', result.text);
    return { success: true, result };
  } catch (error) {
    console.error('[LeadService] Failed to send email via EmailJS:', error);
    return { success: false, error };
  }
}

/**
 * Send lead to Existing Backend API
 */
export async function sendToExistingApi(data) {
  if (!LEAD_CONFIG.api.enabled || !LEAD_CONFIG.api.url) {
    return { success: false, reason: 'API disabled' };
  }

  try {
    const requestBody = {
      data: {
        full_name: data.full_name || data.name || '',
        mobile_number: data.mobile_number || data.phone || '',
        email_address: data.email_address || data.email || '',
        property_type: data.property_type || data.plotSize || 'NA Plot',
        location: data.location || 'Prakriti - Near Takve, Pune',
        message: data.message || '',
      },
    };

    const response = await fetch(LEAD_CONFIG.api.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('[LeadService] API submission success:', result);
    return { success: true, result };
  } catch (error) {
    console.error('[LeadService] Existing API error:', error);
    return { success: false, error };
  }
}

/**
 * Unified Lead Submission Handler
 * Sends lead to Google Sheets, EmailJS, and API concurrently.
 */
export async function submitLead({ name, phone, email, plotSize, message, formSource }) {
  const leadPayload = {
    full_name: name,
    mobile_number: phone,
    email_address: email || '',
    property_type: plotSize ? `${plotSize} sqft Plot` : 'NA Plot',
    location: 'Prakriti - Near Takve, Pune',
    message: message || '',
    form_source: formSource || 'Website Lead',
  };

  const results = await Promise.allSettled([
    sendToGoogleSheet(leadPayload),
    sendToEmailJS(leadPayload),
    sendToExistingApi(leadPayload),
  ]);

  // If at least one service succeeded or attempted without crashing, consider success
  const hasSuccessful = results.some(
    (res) => res.status === 'fulfilled' && res.value && res.value.success === true
  );

  // If both configurations are missing or all fail
  const allConfigMissing =
    !LEAD_CONFIG.googleSheet.scriptUrl &&
    (!LEAD_CONFIG.emailjs.publicKey || LEAD_CONFIG.emailjs.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY');

  return {
    success: hasSuccessful || allConfigMissing,
    results,
  };
}
