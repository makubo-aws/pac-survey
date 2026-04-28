# ElastiCache PAC 2026 – Feedback Survey

Mobile-first feedback survey for the 2026 ElastiCache PAC event in Seattle.

## Quick Setup (15 minutes)

### Step 1: Google Sheet + Apps Script (backend)

1. Create a new [Google Sheet](https://sheets.new)
2. Copy the **Sheet ID** from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Go to **Extensions → Apps Script**
4. Delete any existing code and paste the contents of `google-apps-script.js`
5. Click **Deploy → New deployment**
6. Type = **Web app**, Execute as = **Me**, Who has access = **Anyone**
7. Click **Deploy**, authorize when prompted, and copy the **Web App URL**

### Step 2: Configure

Edit `config.js`:
- Set `scriptUrl` to the Web App URL from Step 1
- Set `sheetId` to the Sheet ID from Step 1

### Step 3: Deploy to GitHub Pages

1. Create a new GitHub repo (public)
2. Push these files: `index.html`, `config.js`
3. Go to repo **Settings → Pages → Source: main branch**
4. Your site is live at `https://yourusername.github.io/repo-name/`

### Step 4: Share

- Survey page: `https://yourusername.github.io/repo-name/`
- Generate a QR code for the survey URL

## Files

| File | Purpose |
|------|---------|
| `index.html` | Survey page (mobile-first) |
| `config.js` | Script URL and Sheet ID configuration |
| `google-apps-script.js` | Backend script (paste into Google Apps Script) |
