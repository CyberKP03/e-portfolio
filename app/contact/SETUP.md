# Contact Form Setup

The contact form is currently set up to **simulate** sending emails and WhatsApp messages. 
To make it actually work, you need to integrate with an Email provider (like Nodemailer with Gmail/SendGrid) and a WhatsApp provider (like Twilio).

## 1. Email Integration (Nodemailer)

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Update `app/contact/contactAction.js`:
   - Uncomment the nodemailer code.
   - Configure the transporter with your credentials.

   Example:
   ```javascript
   import nodemailer from "nodemailer";

   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
     },
   });
   
   // In the submitContactForm function:
   await transporter.sendMail({
     from: process.env.EMAIL_USER,
     to: "your-email@example.com", 
     subject: `New Contact from ${rawFormData.firstname}`,
     text: rawFormData.purpose, 
     // ... handle fields and attachments
   });
   ```

## 2. WhatsApp Integration (Twilio)

1. Install twilio:
   ```bash
   npm install twilio
   ```

2. Update `app/contact/contactAction.js`:
   - Uncomment the Twilio code.
   - Add your Account SID and Auth Token.

   Example:
   ```javascript
   const accountSid = process.env.TWILIO_ACCOUNT_SID;
   const authToken = process.env.TWILIO_AUTH_TOKEN;
   const client = require('twilio')(accountSid, authToken);

   await client.messages.create({
     body: `New Inquiry from ${rawFormData.firstname}: ${rawFormData.purpose}`,
     from: 'whatsapp:+14155238886', // Your Twilio Sandbox number
     to: `whatsapp:${process.env.MY_PHONE_NUMBER}`
   });
   ```

## 3. Environment Variables

Create a `.env.local` file in the root directory and add:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
MY_PHONE_NUMBER=+919876543210
```
