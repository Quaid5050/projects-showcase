# EmailJS Setup Instructions

## Overview
The contact form is now integrated with EmailJS to send form data directly to your company email without backend configuration.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account: `info@phantomautocenter.com`
5. Name your service (e.g., `phantom_service`)
6. Click **Create Service**

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Settings:
   - **Template Name**: `contact_form`
   - **Subject**: `New Contact Form Submission from {{name}}`
   - **Content**:
     ```
     You have received a new contact form submission:

     Name: {{name}}
     Email: {{email}}
     Phone: {{phone}}
     
     Message:
     {{message}}

     ---
     Sent from Phantom Auto Centre Contact Form
     ```
4. Set **Reply To**: `{{email}}`
5. Save the template

## Step 4: Get Your Keys
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Note your **Service ID** (from Email Services)
4. Note your **Template ID** (from Email Templates)

## Step 5: Update Contact Component
Replace the placeholder values in `src/pages/Contact.jsx`:

```javascript
// Line 40-43 in handleSubmit function
const serviceID = 'YOUR_ACTUAL_SERVICE_ID'     // Replace with your Service ID
const templateID = 'YOUR_ACTUAL_TEMPLATE_ID'   // Replace with your Template ID  
const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY'      // Replace with your Public Key
```

## Step 6: Test the Form
1. Run your application: `npm start`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your email for the submission

## Features Implemented
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error feedback
- ✅ Auto-reset after successful submission
- ✅ No page reload
- ✅ Responsive design maintained
- ✅ Existing UI preserved

## Security Notes
- EmailJS handles email sending securely without exposing email credentials
- Public key is safe to expose in frontend code
- No backend email configuration required

## Troubleshooting
- **Form not sending**: Check Service ID, Template ID, and Public Key are correct
- **Email not received**: Check spam folder and EmailJS dashboard
- **Template variables not working**: Ensure template uses correct variable names: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`

## Support
For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
