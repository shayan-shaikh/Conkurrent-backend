import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    secure: true, 
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    },
});