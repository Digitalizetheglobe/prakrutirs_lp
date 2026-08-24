/**
 * =========================================================================
 * GOOGLE APPS SCRIPT FOR FRONTEND GOOGLE SHEET INTEGRATION
 * =========================================================================
 * 
 * STEPS TO SETUP:
 * 1. Open your Google Sheet where you want leads to be saved.
 * 2. In the first row of "Sheet1" (Row 1), add these 5 column headers:
 *    Col A: Timestamp | Col B: Name | Col C: Email | Col D: Phone Number | Col E: Message
 * 3. Go to top menu: Extensions > Apps Script
 * 4. Delete any existing code in the script editor and paste this entire code.
 * 5. Click the "Save" icon (Floppy icon).
 * 6. Click "Deploy" (top right blue button) > "New deployment".
 * 7. Click gear icon next to "Select type" > Select "Web app".
 * 8. Set the following options:
 *    - Description: Prakriti Leads API
 *    - Execute as: Me (your email)
 *    - Who has access: Anyone (CRITICAL: Must select "Anyone" so frontend can submit)
 * 9. Click "Deploy" and Authorize access when prompted.
 * 10. Copy the "Web app URL" (looks like https://script.google.com/macros/s/AKfycby.../exec).
 * 11. Paste this URL into `src/config/leadConfig.js` (or `.env` as `VITE_GOOGLE_SHEET_URL`).
 * =========================================================================
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // If ss is null (standalone script), get active or first sheet
    var sheet = ss ? ss.getSheets()[0] : SpreadsheetApp.getActiveSheet();
    
    if (!sheet) {
      throw new Error("Could not find active sheet. Please open Apps Script from Extensions > Apps Script inside your Google Sheet.");
    }
    
    var data = {};
    
    // 1. Check FormData / URL parameters
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    } 
    // 2. Check JSON payload in postData
    else if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    }

    var timestamp = data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    var name = data.name || data.full_name || '';
    var email = data.email || data.email_address || '';
    var phone = data.phone || data.mobile_number || '';
    var message = data.message || '';

    // Append new lead row to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      "'" + phone, // Prefix with apostrophe so phone numbers retain leading zeros
      message
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success', message: 'Lead added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ result: 'ok', status: 'Google Apps Script Leads API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
