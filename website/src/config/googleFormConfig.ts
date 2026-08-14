/**
 * ============================================================================
 * GOOGLE FORMS BACKENDLESS CONFIGURATION
 * ============================================================================
 * Submits contact inquiries directly from the frontend to Google Forms & Sheets
 * using the Google Forms /formResponse endpoint and a hidden iframe.
 *
 * Note: Stored in source code intentionally (Zero Backend, No .ENV needed).
 *
 * TO USE YOUR OWN GOOGLE FORM:
 * 1. Create a Google Form at https://forms.google.com with fields for:
 *    - Name
 *    - Email
 *    - Company
 *    - Project Type
 *    - Budget
 *    - Timeline
 *    - Message
 * 2. In Google Form settings, ensure "Restrict to users in organisation" is OFF.
 * 3. Click the 3 dots (top right) -> "Get pre-filled link". Fill sample data and click "Get Link".
 * 4. Copy the link and extract your Form ID and entry.XXXXXXXX IDs.
 * 5. Replace the values below:
 */

export const GOOGLE_FORM_ID = "1FAIpQLSe0Dk7LszAC6O_XL3G1-652P6CPIfuO0amrAlX8Bn-0i8K6eA";

export const GOOGLE_FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

export const GOOGLE_FORM_FIELDS = {
  name: "entry.1812525222", // Google Form field ID for Name
  email: "entry.1115411473", // Google Form field ID for Email
  company: "entry.853105555", // Google Form field ID for Company
  projectType: "entry.1507042686", // Google Form field ID for Project Type
  budget: "entry.1303523155", // Google Form field ID for Budget
  timeline: "entry.1824482578", // Google Form field ID for Timeline
  message: "entry.685797653", // Google Form field ID for Project Details / Message
};
