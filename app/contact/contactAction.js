"use server";

import nodemailer from "nodemailer";
import twilio from "twilio";

export async function submitContactForm(prevState, formData) {
  console.log("--- Contact Form Submission Started ---");
  
  const rawFormData = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    company: formData.get("company"),
    purpose: formData.get("purpose"),
    jobDescriptionMode: formData.get("jobDescriptionMode"), 
    jobDescriptionManual: formData.get("jobDescriptionManual"),
    jobDescriptionFile: formData.get("jobDescriptionFile"),
  };

  // Basic Validation
  if (!rawFormData.firstname || !rawFormData.email || !rawFormData.purpose) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // --- HTML Email Template ---
  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #34d399 0%, #10b981 100%); padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; color: #fff; font-size: 24px; text-shadow: 0 1px 2px rgba(0,0,0,0.1); letter-spacing: 1px;">🚀 Incoming Portfolio Inquiry!</h1>
        </div>
        
        <!-- Body -->
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">
            <strong>Hey Boss! 👋</strong>
            <br>
            Someone is trying to reach out to you via your Portfolio. Looks like you've caught someone's eye! Here are the details they dropped:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 10px; font-weight: 600; color: #555; width: 35%; background: #f9fafb;">👤 Name</td>
                <td style="padding: 12px 15px; color: #333;">${rawFormData.firstname} ${rawFormData.lastname}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 10px; font-weight: 600; color: #555; background: #f9fafb;">📧 Email</td>
                <td style="padding: 12px 15px; color: #333;"><a href="mailto:${rawFormData.email}" style="color: #10b981; text-decoration: none; font-weight: 500;">${rawFormData.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 10px; font-weight: 600; color: #555; background: #f9fafb;">🏢 Company</td>
                <td style="padding: 12px 15px; color: #333;">${rawFormData.company || '<span style="color: #9ca3af; font-style: italic;">Not Specified</span>'}</td>
              </tr>
               <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 10px; font-weight: 600; color: #555; background: #f9fafb; vertical-align: top;">📝 Purpose</td>
                <td style="padding: 12px 15px; color: #333; line-height: 1.5;">${rawFormData.purpose}</td>
              </tr>
               <tr>
                <td style="padding: 12px 10px; font-weight: 600; color: #555; background: #f9fafb; vertical-align: top;">📋 Job Desc</td>
                <td style="padding: 12px 15px; color: #333; line-height: 1.5;">${
                  rawFormData.jobDescriptionManual 
                    ? rawFormData.jobDescriptionManual 
                    : rawFormData.jobDescriptionFile && rawFormData.jobDescriptionFile.size > 0 
                      ? "📎 <em>File Attached to this email</em>" 
                      : '<span style="color: #9ca3af; font-style: italic;">None provided</span>'
                }</td>
              </tr>
            </tbody>
          </table>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px dashed #eee;">
            <p style="font-size: 15px; color: #666; font-style: italic; margin: 0;">
              "Great things rarely come from comfort zones."<br>
              <span style="font-size: 13px; color: #999;">Time to seal the deal! ✨</span>
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="padding: 15px; background-color: #f8fafc; color: #94a3b8; font-size: 12px; text-align: center; border-top: 1px solid #e2e8f0;">
          Sent automatically from your <strong>E-Portfolio</strong>
        </div>
      </div>
  `;

  // --- 1. EMAIL LOGIC ---
  let emailSuccess = false;
  let emailError = null;

  if(process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      console.log("Attempting to send Email...");
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail", 
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        let attachments = [];
        if (rawFormData.jobDescriptionFile && rawFormData.jobDescriptionFile.size > 0) {
            const buffer = await rawFormData.jobDescriptionFile.arrayBuffer();
             attachments.push({
                filename: rawFormData.jobDescriptionFile.name,
                content: Buffer.from(buffer),
             });
        }

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          replyTo: rawFormData.email,
          subject: `✨ New Inquiry: ${rawFormData.firstname} from ${rawFormData.company || 'Portfolio'}`,
          html: htmlContent,
          attachments: attachments
        });
        emailSuccess = true;
        console.log("Email sent successfully.");
      } catch (error) {
        console.error("Error sending email:", error);
        emailError = error;
      }
  } else {
      console.warn("Skipping Email: EMAIL_USER or EMAIL_PASS not set");
  }

  // --- 2. WHATSAPP LOGIC ---
  let whatsappSuccess = false;
  let whatsappError = null;

  console.log("Checking WhatsApp Config:");
  console.log("- SID:", process.env.TWILIO_ACCOUNT_SID ? "Found" : "Missing");
  console.log("- Token:", process.env.TWILIO_AUTH_TOKEN ? "Found" : "Missing");
  console.log("- My Number:", process.env.MY_PHONE_NUMBER ? "Found" : "Missing");

  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.MY_PHONE_NUMBER) {
      console.log("Attempting to send WhatsApp...");
      try {
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        
        const fromNumber = 'whatsapp:+14155238886'; 
        
        // Clean Phone Number
        let toNumber = process.env.MY_PHONE_NUMBER.replace(/[\s\-\(\)]/g, '');
        if (!toNumber.startsWith('+')) {
             console.log("Adding missing '+' to phone number");
             toNumber = '+' + toNumber;
        }

        console.log(`Sending WhatsApp from ${fromNumber} to ${toNumber}`);

        const waMessage = `🚀 *New Portfolio Inquiry!*\n\n` +
                          `👤 *Name:* ${rawFormData.firstname} ${rawFormData.lastname}\n` +
                          `📧 *Email:* ${rawFormData.email}\n` +
                          `🏢 *Company:* ${rawFormData.company || "N/A"}\n\n` +
                          `📝 *Message:*\n${rawFormData.purpose}`;

        await client.messages.create({
          body: waMessage,
          from: fromNumber,
          to: `whatsapp:${toNumber}`
        });
        whatsappSuccess = true;
         console.log("WhatsApp message sent successfully.");
      } catch (error) {
        console.error("Error sending WhatsApp:", error);
        whatsappError = error;
      }
  } else {
      console.warn("Skipping WhatsApp: credentials missing");
  }

  // --- RETURN LOGIC ---
  if (emailSuccess || whatsappSuccess) {
       console.log("Success: At least one Method worked.");
       let msg = "Thanks! I've received your message.";
       if (emailSuccess && whatsappSuccess) {
          msg = "Message sent successfully (Email + WhatsApp)!";
       } else if (emailSuccess) {
           msg = "Message sent to Email successfully!";
       } else if (whatsappSuccess) {
           msg = "Message sent to WhatsApp successfully!";
       }
       
       if (emailError) msg += " (Email failed)";
       if (whatsappError) msg += " (WhatsApp failed)";

       return { success: true, message: msg };
  } else if (!process.env.EMAIL_USER && !process.env.TWILIO_ACCOUNT_SID) {
        console.log("Simulation Mode: No credentials");
        return {
            success: true,
            message: "Simulation: Message 'sent' (Configure .env to enable real sending)",
        };
  } else {
      console.error("Failure: Both methods failed.");
      // Return specific error message
      let errorMsg = "Failed to send message.";
      if (emailError) {
          if (emailError.message.includes("Invalid login")) {
               errorMsg += " Email: Auth failed (Check App Pass).";
          } else {
               errorMsg += " Email: " + emailError.message;
          }
      }
      if (whatsappError) {
           if (whatsappError.code === 63015 || whatsappError.message.includes("not currently joined")) {
               errorMsg += " WhatsApp: Target number hasn't joined Sandbox.";
           } else if (whatsappError.code === 21211) {
                errorMsg += " WhatsApp: Invalid Phone Number format.";
           } else {
               errorMsg += " WhatsApp: " + whatsappError.message;
           }
      }
      return { success: false, message: errorMsg };
  }
}
