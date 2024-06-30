import * as nodemailer from 'nodemailer';
import path from 'path';

export default function sendMail(req,res,next){
    const email = req.body.email;
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'codingninjas2k16@gmail.com',
            pass:'slwvvlczduktvhdj',
        },
    });
    const mailOption = {
        from:'codingninjas2k16@gmail.com',
        to:email,
        subject:'Job Application Received',
       
        html: `
            <h1 style="text-align:center;"> Job Application Confirmation </h1>
            <div style="text-align:center;"> Dear User </div>
            <div style="text-align:center;">Thank you for applying to a job at Easily. We have received your application and are currently reviewing it.If your qualifications match our requirements, we will contact you for the next steps of the selection process.Thank you for your interest in joining our team!</div>
            <p style="text-align:center;"> Best Regards </p>
            <p style="text-align:center;"> The Easily Team </p>
        `,
    };

    try{
        const result = transporter.sendMail(mailOption);
        next();
    }
    catch(err){
        console.log("Email send failed with error: "+err);
    }
}
