import { NextResponse } from "next/server";
import nodeMailer from 'nodemailer';

export async function GET(req, res) {
  const transporter = nodeMailer.createTransport({
          host: process.env.NEXT_SMTP_HOST,
          port: process.env.NEXT_SMTP_PORT,
          service: process.env.NEXT_SMTP_SERVICE,
          auth: {
              user: process.env.NEXT_SMTP_MAIL,
              pass: process.env.NEXT_SMTP_PASSWORD
          }
      });
  
      const mailOptions = {
          from: process.env.NEXT_SMTP_MAIL,
          to: 'delwarbscse@gmail.com',
          subject: "Check Mail",
          text: "Hello World"
      };
  
      try {
          await transporter.sendMail(mailOptions);
          return NextResponse.json({ message: 'Email sent successfully' });
      } catch (error) {
          console.error('Error sending email:', error);
          return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      } 
}