import { NextResponse } from 'next/server';
import { mailOptions, transporter } from "../../../config/nodemailer";
import { ContactMail } from '../../../emails/Contact';
import { render } from "@react-email/render";

export async function POST(req) {
    if (req.method === "POST") {
        const data = await req.json();

        if (!data.name || !data.mail || !data.message || !data.object) {
            return NextResponse.json({ message: "Bad Request"}, { status: 400 })
        };

        try {
            const emailHtml = render(<ContactMail data={data} />);
            const text = render(<ContactMail data={data} />, {
                plainText: true,
            });

            await transporter.sendMail({
                ...mailOptions,
                subject: `Portfolio contact: ${data.object}`,
                html: emailHtml,
                text: text,
            });
            return NextResponse.json({ status: 200 });
        } catch (error) {
            console.log(error);
            return NextResponse.json({ message: error}, { status: 500 })
        }
    }

    return NextResponse.json({ message: "Bad Request"}, { status: 400 })
};