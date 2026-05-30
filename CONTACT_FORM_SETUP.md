# Contact Form Setup Guide

## Overview
The contact form uses **EmailJS** to send emails directly from the frontend without requiring a backend API. All configuration is managed through environment variables.

## Installation
The `@emailjs/browser` package has already been installed. It's included in your `package.json` dependencies.

## Setup Instructions

### Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Email verification is required

### Step 2: Create an Email Service
1. In the EmailJS dashboard, go to **Email Services** (or **Integrations**)
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **SendGrid**
   - **Other providers**
4. Follow the authentication steps for your chosen provider
5. **Copy your Service ID** (format: `service_xxxxxxxxxxxxx`)

### Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body
   - `{{to_email}}` - Recipient email (your email)

Example template HTML:
```html
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

4. **Copy your Template ID** (format: `template_xxxxxxxxxxxxx`)
5. Save the template

### Step 4: Get Your Public Key
1. Go to **Account** settings in the EmailJS dashboard
2. Look for **Public Key**
3. **Copy your Public Key** (format: `xxxxxxxxxxxxxxxxxxxxx`)

### Step 5: Configure Environment Variables
1. Open `.env.local` in your project root
2. Fill in the three credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Make sure `.env.local` is in your `.gitignore` (it should already be)
4. Do NOT commit this file to version control

### Step 6: Update Recipient Email (Optional)
In [Contact.jsx](./Contact.jsx), update the recipient email on line 85:
```javascript
to_email: "your-email@example.com",  // Change this to your email
```

## Component Features

### Form Validation
- **Name**: Required, non-empty
- **Email**: Required, valid email format (regex validated)
- **Subject**: Required, non-empty
- **Message**: Required, non-empty
- Errors display inline as users type

### User Experience
- **Loading State**: Shows spinner and "Sending..." text while email is being sent
- **Success Message**: Green banner with confirmation message
- **Error Message**: Red banner with error details
- **Auto-dismiss**: Status messages auto-clear after 5 seconds
- **Disabled State**: Form inputs disabled during sending
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Styling
- Matches the existing dark theme with `--glow`, `--foreground`, `--background` colors
- Uses Tailwind CSS for responsive utilities
- Smooth transitions and hover effects
- Consistent with the portfolio UI design

## Testing

### Local Testing
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill in all fields with valid data
4. Click "Send Message"
5. Check your email inbox for the test message

### Troubleshooting

**"Failed to send message" error:**
- Verify all three environment variables are correctly set
- Check that your EmailJS Service and Template IDs match your dashboard
- Ensure your email service is properly connected and verified in EmailJS
- Check browser console (F12 → Console tab) for detailed error messages

**Email not receiving messages:**
- Verify the `to_email` in the form is correct
- Check spam/junk folder
- Make sure your email service is properly authenticated in EmailJS dashboard
- Verify the email template is published (not in draft)

**Environment variables not loading:**
- Restart the dev server after updating `.env.local`
- Make sure the file is named `.env.local` (not `.env`)
- Restart VS Code or reload the browser

## Security Notes
- Never commit `.env.local` to version control
- The public key is safe to expose (it's called "public" key)
- EmailJS handles all email delivery securely
- Form data is sent directly from the client to EmailJS servers
- No sensitive data passes through your backend

## Free Tier Limits (EmailJS)
- Up to 200 emails per month on free plan
- Sufficient for a portfolio contact form
- Upgrade to paid plan for higher limits if needed

## Production Deployment
When deploying to production (Netlify, Vercel, Render, etc.):
1. Add your environment variables to the hosting platform's settings
2. Do NOT include `.env.local` in your deployment
3. The platform will inject environment variables at build/runtime
4. Example for Render: Go to Environment → Add environment variables

## Component Code Location
[src/components/sections/Contact.jsx](./Contact.jsx)

## Dependencies
- `@emailjs/browser` - Email sending library
- `framer-motion` - Animations (already installed)
- `lucide-react` - Icons (already installed)
- `react` - UI library (already installed)
