// ============================================================
// Google Apps Script — paste this into script.google.com
// ============================================================
//
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste this entire file into the script editor
// 4. Click Deploy > New deployment
// 5. Choose "Web app"
// 6. Set "Execute as" = Me, "Who has access" = Anyone
// 7. Click Deploy and copy the Web App URL
// 8. Paste the URL into config.js as scriptUrl
// 9. Paste the Sheet ID (from the sheet URL) into config.js as sheetId
// ============================================================

var HEADERS = [
  "Timestamp",
  "Name",
  "Company",
  "Q1: Overall Satisfaction (1-5)",
  "Q2: Product Team Value (1-5)",
  "Q3: Likelihood to Attend Future Event (1-5)",
  "Q4: Likelihood to Recommend (1-5)",
  "Q5: Technical Depth (1-5)",
  "Q6: Most Valuable Sessions",
  "Q7: Topics for More Depth",
  "Q8: Other Feedback"
];

function doGet(e) {
  try {
    var dataParam = e.parameter.data;
    if (!dataParam) {
      return ContentService.createTextOutput("PAC Survey backend is running!")
        .setMimeType(ContentService.MimeType.TEXT);
    }

    var data = JSON.parse(decodeURIComponent(dataParam));
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Write headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#e8f0fe");
      sheet.setFrozenRows(1);
    }

    var row = [
      data.timestamp || new Date().toISOString(),
      data.name || "Anonymous",
      data.company || "Unknown",
      data.q1_overall_satisfaction || "",
      data.q2_product_team_value || "",
      data.q3_likelihood_attend_future || "",
      data.q4_likelihood_recommend || "",
      data.q5_technical_depth || "",
      data.q6_most_valuable || "",
      data.q7_more_depth || "",
      data.q8_other || ""
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
