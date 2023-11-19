// pages/api/sendMail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
    throw new Error('SENDGRID_API_KEY is not defined in your environment variables');
}
sgMail.setApiKey(sendgridApiKey);


export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, email, company, message } = req.body;

        // Construct the email message
        const msg = {
            to: 'support@roundbytes.com', // Your email where you'll receive messages
            from: 'support@roundbytes.com', // Use a verified sender's email address
            replyTo: email, // Set the user's email as reply-to
            subject: `RB - Contact from ${name}`,
            text: `Name: ${name}\nCompany: ${company}\nMessage: ${message}`,
        };

        // Send the email
        await sgMail.send(msg);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).json({ error: 'Error sending email' });
    }
}
