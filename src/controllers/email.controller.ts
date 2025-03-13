import { Request, Response } from 'express';
import { transporter } from '../utils/nodemailer.config';
import { collabResponse, feedbackTitle, getsuggestionResponse } from '../constants/constants';
import { getTemplate } from '../utils/email.template';

export const sendSuggestionFeedback = async (req: Request, res: Response) => {
    try {
      const { email, name, featureMe } = req.body;
      console.log(
        "--------------nodemailer details are------",
        process.env.NODEMAILER_EMAIL
      );
  
      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        cc: process.env.ADMIN_EMAIL_IDS,
        subject: feedbackTitle,
        html: featureMe ? getTemplate(collabResponse(name), process.env.UI_URL as string) : getTemplate(getsuggestionResponse(name), process.env.UI_URL as string),
      };
  
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
  
      return res.status(200).send("Email sent to user successfully");
    } catch (error) {
      console.error(`Error sending an email : `, error);
      res.status(500).send("Error sending an email");
    }
  };