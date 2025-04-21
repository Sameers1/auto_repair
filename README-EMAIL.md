# Email Notification Setup for Auto Elite Website

This document explains how to set up email notifications for the contact form submissions on the Auto Elite website.

## Overview

When a user submits a service request through the contact form, the system will:
1. Save the form data in the database
2. Send an email notification to your specified email address with all the request details

## Configuration Steps

### 1. Update the .env File

Edit the `.env` file in the root directory with your email service credentials:

```
# Email Configuration
EMAIL_HOST=smtp.gmail.com  # Change if using a different email provider
EMAIL_PORT=587             # Common port for TLS (587), SSL would use 465
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com  # Where notifications will be sent
```

### 2. Set Up Gmail App Password (If Using Gmail)

If you're using Gmail, you'll need to generate an "App Password" since Google doesn't allow regular passwords for SMTP access:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Step Verification if you haven't already
3. Go to "Security" > "App passwords"
4. Select "Mail" and "Other (Custom name)" 
5. Enter "Auto Elite Website" as the name
6. Click "Generate"
7. Use the generated 16-character password as your EMAIL_PASS in the .env file

### 3. For Other Email Providers

If using another email provider, update the EMAIL_HOST, EMAIL_PORT, and authentication details accordingly.

## Testing the Email Functionality

After setting up the configuration:

1. Start the server with `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your RECIPIENT_EMAIL inbox for the notification
5. Verify that it contains all the submitted information

## Troubleshooting

If emails are not being received:

1. Check the server logs for any error messages
2. Verify your email credentials are correct
3. Make sure your email provider allows SMTP access
4. Check your spam/junk folder
5. Some email providers might block automated emails; adjust your security settings if needed

For Gmail users, make sure:
- Less secure app access is enabled, or
- You're using an App Password (preferred method)
- Your Google account doesn't have additional security restrictions

## Custom Email Template

The email content template can be modified in the `server/emailService.ts` file if you want to change the format or add more information. 