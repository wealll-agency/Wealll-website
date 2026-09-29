/**
 * We Alll Office — CRM Lead API Service
 *
 * API Endpoint:
 *   UAT:        https://uat.wealll.cloud/api/leads/website
 *   Production: https://wealll.cloud/api/leads/website
 *
 * The correct URL is injected at build time via VITE_CRM_API_URL
 * (defined in .env for local/UAT and .env.production for production builds).
 *
 * Response Codes:
 *   201 — New lead created (response.duplicate === false)
 *   200 — Existing lead updated (response.duplicate === true) — this is VALID, not an error
 *   400 — Validation error or honeypot triggered
 *   403 — CORS / Origin not allowed
 *   429 — Rate limit (20 requests / 15 min per IP)
 */

const CRM_API_URL =
  import.meta.env.VITE_CRM_API_URL || "https://wealll.cloud/api/leads/website";

/**
 * Submit a lead to the We Alll Office CRM.
 *
 * @param {object} leadData
 * @param {string} leadData.fullName    — Required
 * @param {string} leadData.phone       — Required
 * @param {string} leadData.email       — Optional
 *
 * @param {string} leadData.budget      — Optional
 * @param {string} leadData.message     — Optional (maps to CRM "notes" field)
 * @param {string} leadData.source      — Recommended. Unique per campaign/page.
 * @param {string} leadData.reference   — Optional. Extra campaign info.
 *
 * @returns {{ success: boolean, duplicate?: boolean, error?: string }}
 */
export const submitLeadToCRM = async (leadData) => {
  if (!CRM_API_URL) {
    console.error("[CRM] VITE_CRM_API_URL is not set. Check your .env file.");
    return { success: false, error: "CRM API URL is not configured." };
  }

  const payload = {
    fullName: (leadData.fullName || "").trim(),
    phone: (leadData.phone || "").trim(),
    email: (leadData.email || "").trim(),
    budget: leadData.budget || "",
    notes: (leadData.message || "").trim(), // "message" in form → "notes" in CRM
    source: leadData.source || "Website",
    reference: leadData.reference || "",
    _hp: "", // Honeypot — always empty string
  };

  try {
    const response = await fetch(CRM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // 201 — New lead created
    // 200 — Duplicate: existing lead updated. This is VALID, not an error.
    if (response.status === 201 || response.status === 200) {
      const data = await response.json();
      return { success: true, duplicate: data.duplicate === true };
    }

    // 400 — Validation error
    if (response.status === 400) {
      let errMsg = "Submission validation failed.";
      try {
        const errData = await response.json();
        errMsg = errData.message || errMsg;
      } catch (_) {
        /* ignore JSON parse error */
      }
      console.error("[CRM] 400 Validation error:", errMsg);
      return { success: false, error: errMsg };
    }

    // 403 — CORS / Origin not allowed
    if (response.status === 403) {
      console.error("[CRM] 403 Origin not allowed by CRM API.");
      return {
        success: false,
        error: "Origin not permitted. Please contact support.",
      };
    }

    // 429 — Rate limit exceeded
    if (response.status === 429) {
      console.error("[CRM] 429 Rate limit exceeded.");
      return {
        success: false,
        error: "Too many submissions. Please try again after a few minutes.",
      };
    }

    // Other unexpected status
    console.error("[CRM] Unexpected response status:", response.status);
    return {
      success: false,
      error: `Unexpected error (${response.status}). Please try again.`,
    };
  } catch (err) {
    // Network error, fetch failed, etc.
    console.error("[CRM] Network error during lead submission:", err);
    return {
      success: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
};

/**
 * Legacy: Submit lead to Google Sheets via Apps Script.
 * Kept for reference. No longer used in production forms.
 *
 * @deprecated Use submitLeadToCRM instead.
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
    const fetchPromise = fetch(GOOGLE_SHEET_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 800));
    await Promise.race([fetchPromise, timeoutPromise]);
    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead to Google Sheet:", error);
    return { success: false, error: error.message };
  }
};
