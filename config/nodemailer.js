import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: email,
        pass,
    }
});

export const mailOptions = {
    from: email,
    to: email
};