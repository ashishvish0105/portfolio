# ✅ Contact Form Setup Checklist

## Phase 1: Initial Setup ✅ (Already Done)
- ✅ Installed `@emailjs/browser` package
- ✅ Created React contact form component
- ✅ Implemented form validation
- ✅ Added EmailJS integration
- ✅ Created `.env.local` template file
- ✅ Added comprehensive documentation

## Phase 2: EmailJS Configuration (You Do This)

### Step 1: Create EmailJS Account
- [ ] Go to https://www.emailjs.com/
- [ ] Sign up for free account
- [ ] Verify your email

### Step 2: Set Up Email Service
- [ ] Log in to EmailJS dashboard
- [ ] Go to "Email Services" or "Integrations"
- [ ] Click "Add New Service"
- [ ] Choose email provider (Gmail recommended)
- [ ] Complete authentication for your email
- [ ] Copy your **Service ID** (format: `service_xxxxxxxxxxxxx`)
  - Save it: `___________________________`

### Step 3: Create Email Template
- [ ] Go to "Email Templates"
- [ ] Click "Create New Template"
- [ ] Set up template with these template variables:
  - [ ] `{{from_name}}`
  - [ ] `{{from_email}}`
  - [ ] `{{subject}}`
  - [ ] `{{message}}`
  - [ ] `{{to_email}}`
- [ ] Optional: Customize template HTML
- [ ] Click "Save Template"
- [ ] Copy your **Template ID** (format: `template_xxxxxxxxxxxxx`)
  - Save it: `___________________________`
- [ ] Note: Make sure template is PUBLISHED (not in draft)

### Step 4: Get Public Key
- [ ] Go to "Account" in EmailJS dashboard
- [ ] Find "Public Key" section
- [ ] Copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxx`)
  - Save it: `___________________________`

### Step 5: Fill in Environment Variables
- [ ] Open `.env.local` in your project root
- [ ] Replace the three placeholder values:
  ```env
  VITE_EMAILJS_SERVICE_ID=your_service_id_here
  VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
  VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
  ```
- [ ] Save the file
- [ ] Do NOT commit this file to GitHub

### Step 6: Update Recipient Email (Optional)
- [ ] Open `src/components/sections/Contact.jsx`
- [ ] Find line 85: `to_email: "ashishvish0105@gmail.com",`
- [ ] Change to your email: `to_email: "your-email@example.com",`
- [ ] Save the file

## Phase 3: Testing (You Do This)

### Step 1: Start Dev Server
- [ ] Run: `npm run dev`
- [ ] Wait for Vite to start
- [ ] Open browser to http://localhost:5173

### Step 2: Test the Form
- [ ] Navigate to contact section
- [ ] Fill in all fields:
  - [ ] Name: Your name
  - [ ] Email: test@example.com
  - [ ] Subject: Test message
  - [ ] Message: Hello, this is a test
- [ ] Click "Send Message"
- [ ] Verify loading spinner appears
- [ ] Wait for response

### Step 3: Verify Success
- [ ] Should see green success banner
- [ ] Banner should say "Message sent successfully!"
- [ ] Form fields should be cleared
- [ ] Check your email inbox (refresh page)
- [ ] You should receive the test email
- [ ] If not in inbox, check spam folder

### Step 4: Test Validation
- [ ] Clear all fields
- [ ] Click "Send Message"
- [ ] Should see red error messages:
  - [ ] "Name is required"
  - [ ] "Email is required"
  - [ ] "Subject is required"
  - [ ] "Message is required"
- [ ] Type in Name field → error should clear
- [ ] Enter invalid email (e.g., "test")
- [ ] Should show "Please enter a valid email"
- [ ] Enter valid email → error clears

### Step 5: Test Error Handling
- [ ] Stop your dev server
- [ ] In Contact.jsx, temporarily change service ID to invalid value
- [ ] Restart dev server
- [ ] Try to send form
- [ ] Should see red error banner
- [ ] Revert the change and restart

## Phase 4: Deployment (When Ready)

### For Netlify
- [ ] Go to Site settings → Environment
- [ ] Add 3 environment variables with same names:
  - [ ] `VITE_EMAILJS_SERVICE_ID`
  - [ ] `VITE_EMAILJS_TEMPLATE_ID`
  - [ ] `VITE_EMAILJS_PUBLIC_KEY`
- [ ] Redeploy your site
- [ ] Test contact form on live site

### For Vercel
- [ ] Go to Settings → Environment Variables
- [ ] Add 3 variables (same as Netlify)
- [ ] Redeploy
- [ ] Test contact form

### For Other Platforms
- [ ] Look for "Environment Variables" settings
- [ ] Add the 3 VITE_EMAILJS_* variables
- [ ] Redeploy
- [ ] Test contact form

## Phase 5: Ongoing Maintenance

### Monthly
- [ ] Monitor EmailJS free tier usage
- [ ] If over 200 emails/month, upgrade plan
- [ ] Check spam folder occasionally

### When Issues Occur
- [ ] Check browser console (F12 → Console tab)
- [ ] Check EmailJS logs in dashboard
- [ ] Verify template is published
- [ ] Verify email service is still connected
- [ ] See CONTACT_FORM_SETUP.md for troubleshooting

---

## 📚 Documentation Files

- **[CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)** - Detailed setup guide & troubleshooting
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - What was implemented & features
- **[CODE_REFERENCE.md](./CODE_REFERENCE.md)** - Code patterns & technical reference
- **[src/components/sections/Contact.jsx](./src/components/sections/Contact.jsx)** - Component source code

---

## 🚀 Quick Reference

| What | Where |
|------|-------|
| Component | `src/components/sections/Contact.jsx` |
| Env vars | `.env.local` |
| EmailJS Dashboard | https://dashboard.emailjs.com/admin |
| EmailJS Docs | https://www.emailjs.com/docs/ |

---

## ❓ Common Questions

**Q: Do I need a backend?**
A: No! EmailJS handles everything from the frontend.

**Q: Is my email address visible in code?**
A: Only to you. The public key is meant to be public.

**Q: How many emails can I send?**
A: Free plan: 200/month. Upgrade for more.

**Q: Will emails go to spam?**
A: Rarely if your email service is properly verified in EmailJS.

**Q: Can I change the email recipient?**
A: Yes! Update `to_email` in the Contact.jsx component or the EmailJS template.

---

## ✨ You're All Set!

Once you complete the phases above, your contact form will be:
- ✅ Fully functional
- ✅ Production-ready
- ✅ Deployed and live
- ✅ Sending real emails to your inbox

Happy coding! 🎉
