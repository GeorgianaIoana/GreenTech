# Quick EmailJS Setup - Follow These Steps

## Step 1: Add Email Service (2 minutes)

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/admin
2. Click **"Email Services"** in the left menu
3. Click **"Add New Service"**
4. Select **"Gmail"** (or your email provider)
5. Click **"Connect Account"** and authorize EmailJS to send emails from your Gmail
6. **Copy the Service ID** - it looks like: `service_xxxxxxx`
   - You'll see it right after creating the service

## Step 2: Create Email Template (3 minutes)

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Fill in:

**Template Name**: `contact_form`

**Subject Line** (copy this exactly):
```
New Contact Form: {{from_name}}
```

**Content** (copy this exactly):
```
Hello Georgiana,

You have received a new contact form submission:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Service: {{service}}

Message:
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your website contact form.
```

4. Click **"Save"**
5. **Copy the Template ID** - it looks like: `template_xxxxxxx`

## Step 3: Get Your Public Key (1 minute)

1. Click **"Account"** → **"General"** in the left menu
2. Scroll down to find **"Public Key"**
3. **Copy the Public Key** - it looks like: `xxxxxxxxxxxxx`

## Step 4: Create .env File (1 minute)

1. In your project root folder, create a file named `.env`
2. Add these lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Example** (don't use these, use YOUR values):
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop
```

## Step 5: Test It!

1. Save the `.env` file
2. Restart your dev server:
   ```bash
   npm run dev
   ```
3. Go to your contact form
4. Fill it out and submit
5. Check your email: **georgiana17stanciu@gmail.com**

## Need Help?

If you get stuck, check:
- Browser console (F12) for error messages
- Make sure all three values in `.env` are correct
- Make sure you restarted the dev server after creating `.env`
- The email will be sent to the email address connected to your EmailJS service


