'use server'
import nodemailer from 'nodemailer';

export const sendEmail = async (name: string, email: string, message: string) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL2,
        subject: 'New Booking Request',
        text: `Name: ${name} with Email: ${email}\n wants to book the house : ${message}`,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        return { type: true, body: 'Email sent successfully' };
    } catch (error) {
        return { type: false, body: 'Error sending email' };
    }
};
