/**
 * Lead capture service to push form submissions directly to Google Sheets via Google Apps Script Web App.
 */

const GOOGLE_SHEET_ENDPOINT =
  import.meta.env.VITE_GOOGLE_SHEET_LEAD_URL ||
  "https://script.google.com/macros/s/AKfycbxgbiF3W1nWugJpgjdKTvzCM59Yn6pVDYTex7i7-0ZPlM6lzqo5C9VZgJt9Xx0M0inF/exec";

export const submitLeadToSheet = async (leadData) => {
  const payload = {
    name: leadData.fullName || leadData.name || "",
    email: leadData.email || "",
    phone: leadData.phone || leadData.phoneNo || "",
    budget: leadData.budget || "",
    message: leadData.message || "",
  };

  try {
    // Dispatch request to Google Apps Script
    const fetchPromise = fetch(GOOGLE_SHEET_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // Google Apps Script processes and records the row immediately upon receiving the payload.
    // Racing with an 800ms timeout prevents the browser from stalling on Google's 302 redirect.
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 800));

    await Promise.race([fetchPromise, timeoutPromise]);

    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead to Google Sheet:", error);
    return { success: false, error: error.message };
  }
};
