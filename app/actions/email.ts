'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
})

interface FormData {
  name: string
  category: string
  phone: string
  email: string
  message: string
}

export async function sendEmailNotification(formData: FormData) {
  try {
    // Email to the admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Category:</strong> ${formData.category}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
      `
    })

    // Confirmation email to the user if email is provided
    if (formData.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: formData.email,
        subject: 'Welcome to QuickLaunch Digital! 🚀',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .content { background-color: #f9fafb; padding: 30px; border-radius: 8px; }
                .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #6b7280; }
                .social-links { margin-top: 20px; }
                .social-links a { margin: 0 10px; }
                .disclaimer { font-size: 11px; color: #6b7280; margin-top: 20px; font-style: italic; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://i.postimg.cc/445MwLjJ/wmremove-transformed-removebg-preview-1.png" alt="Quick Launch Digital Logo" style="max-width: 200px;">
                </div>
                
                <div class="content">
                  <h2 style="color: #1e40af; text-align: center;">Thank You for Choosing Quick Launch Digital! 🚀</h2>
                  <p>Dear ${formData.name},</p>
                  <p>Thank you for reaching out to Quick Launch Digital. We're excited to help you establish your online presence!</p>
                  <p>Our team has received your inquiry and we'll be reviewing it shortly. You can expect to hear back from us within the next 24 hours.</p>
                  <p>In the meantime, feel free to:</p>
                  <ul>
                    <li>Visit our website: <a href="https://quicklaunchdigital.vercel.app" style="color: #2563eb;">quicklaunchdigital.vercel.app</a></li>
                    <li>Call us directly: <a href="tel:8083285661" style="color: #2563eb;">+91 8083285661</a></li>
                    <li>Check out our services and portfolio</li>
                  </ul>
                  
                  <img src="https://i.postimg.cc/xC7kSy4q/Screenshot-2025-01-13-230606.png" alt="Quick Launch Digital Banner" style="max-width: 100%; margin-top: 20px; border-radius: 4px;">
                </div>

                <div class="footer">
                  <p>
                    <strong>Quick Launch Digital</strong><br>
                    Make your Presence Online This Year<br>
                    T: <a href="tel:8083285661" style="color: #2563eb;">8083285661</a><br>
                    E: <a href="mailto:quicklaunchdigital4u@gmail.com" style="color: #2563eb;">quicklaunchdigital4u@gmail.com</a>
                  </p>
                  
                  <div class="social-links">
                    <a href="https://linkedin.com/company/quicklaunchdigital" style="color: #2563eb;">LinkedIn</a> |
                    <a href="https://wa.me/918083285661" style="color: #2563eb;">WhatsApp</a> |
                    <a href="https://github.com/quicklaunchdigital" style="color: #2563eb;">GitHub</a>
                  </div>

                  <p class="disclaimer">
                    The content of this email is confidential and intended for the recipient specified in message only. 
                    It is strictly forbidden to share any part of this message with any third party, without a written 
                    consent of the sender. If you received this message by mistake, please reply to this message and 
                    follow with its deletion, so that we can ensure such a mistake does not occur in the future.
                  </p>
                </div>
              </div>
            </body>
          </html>
        `
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: 'Failed to send email' }
  }
} 