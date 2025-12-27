# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form to georgiana17stanciu@gmail.com.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Important**: Use `georgiana17stanciu@gmail.com` as the recipient email
6. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name**: Contact Form

**Subject**: New Contact Form Submission from {{from_name}}

**Content**:
```
Hello,

You have received a new message from your contact form:

Name: {{from_name}}
Email: {{from_email}}
Service: {{service}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** and copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from EmailJS

## Step 6: Restart Your Development Server

After adding the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at georgiana17stanciu@gmail.com
4. You should receive the form submission

## Troubleshooting

- Make sure your `.env` file is in the root directory
- Restart the dev server after adding environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is connected and active
- Ensure the template variables match: `{{from_name}}`, `{{from_email}}`, `{{service}}`, `{{message}}`

## Security Note

The `.env` file should be added to `.gitignore` to keep your credentials secure. Never commit your `.env` file to version control.

