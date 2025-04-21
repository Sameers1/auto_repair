import nodemailer from 'nodemailer';
import { type InsertContactForm } from "@shared/schema";

// Create a transporter with your email service details
// You should replace these with your actual email service credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS || 'your-email-password' // Replace with your email password or app password
  }
});

export interface EmailService {
  sendContactFormNotification(formData: InsertContactForm): Promise<boolean>;
}

export class NodemailerEmailService implements EmailService {
  private recipientEmail: string;

  constructor(recipientEmail: string = process.env.RECIPIENT_EMAIL || 'your-email@gmail.com') {
    this.recipientEmail = recipientEmail;
  }

  async sendContactFormNotification(formData: InsertContactForm): Promise<boolean> {
    try {
      // Create a formatted message with all the form details
      const serviceTypeMap: Record<string, string> = {
        engine: "Engine Diagnostics & Repair",
        brake: "Brake System Service",
        transmission: "Transmission Service",
        electrical: "Electrical Systems",
        ac: "Air Conditioning Service",
        alignment: "Wheel Alignment",
        other: "Other Service"
      };
      
      const serviceType = serviceTypeMap[formData.service] || formData.service;
      
      const emailContent = `
        <h2>New Service Request from AutoElite Website</h2>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Requested:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `;

      // Define email options
      const mailOptions = {
        from: `"AutoElite Service" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
        to: this.recipientEmail,
        subject: `New Service Request from ${formData.name}`,
        html: emailContent
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email notification:', error);
      return false;
    }
  }
}

// Create and export the email service instance
export const emailService = new NodemailerEmailService(); 