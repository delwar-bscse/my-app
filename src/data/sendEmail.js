import nodeMailer from 'nodemailer';

export const sendEmail = async(options)=>{
    
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
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);
};