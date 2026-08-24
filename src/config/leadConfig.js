// Configuration for Frontend-only Lead Integrations (EmailJS & Google Sheets)

export const LEAD_CONFIG = {
  // 1. EmailJS Configuration
  // Create account at https://www.emailjs.com/
  // Create an Email Service, an Email Template, and get your Public Key
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_o2ge1u3',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rvs9dx4',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8YuX3B0aAuvLQ4BVh',
  },

  // 2. Google Sheets Web App URL
  // Deploy Google Apps Script on your Google Sheet as a Web App (Access: Anyone)
  // Paste the Web App URL here or in .env (VITE_GOOGLE_SHEET_URL)
  googleSheet: {
    scriptUrl: import.meta.env.VITE_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbzzegKk8pbUCPt7GeRSqYejqJXZacTJ3rmnRQ1u8BUkNt9TQO3LMbpF7L-r8CClfno-/exec',
  },

  // 3. Existing RisingSpaces API Backend
  api: {
    url: 'https://api.risingspaces.in/api/forms/forms/6a158501fbaedc3f5f68b738/submit',
    enabled: true,
  },
};
