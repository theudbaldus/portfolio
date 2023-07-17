"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { sendMail } from "@/lib/mail";

export default function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        if (!data.mail || !data.object || !data.name || !data.message) {
            alert("You must fill all the fields.");
            return;
        };

        await sendMail(data);
    };

    return (
        <main className="relative w-screen h-screen flex flex-col select-none overflow-hidden">
            <div className="z-[10] w-full overflow-scroll">
                <motion.form initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:w-[60vw] flex flex-col gap-8 px-4 md:px-[128px] py-[64px] md:py-[86px] lg:py-[128px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-xl md:text-2xl text-white">Contact me !</h2>

                    <input className="text-base text-white bg-slate-700/50 p-2 border border-white rounded-lg outline-none" placeholder="Your name" {...register("name")} />

                    <input className="text-base text-white bg-slate-700/50 p-2 border border-white rounded-lg outline-none" placeholder="Your mail" {...register("mail")} />

                    <input className="text-base text-white bg-slate-700/50 p-2 border border-white rounded-lg outline-none" placeholder="Object of your message" {...register("object")} />

                    <textarea className="h-[20vh] text-base text-white bg-slate-700/50 p-2 border border-white rounded-lg outline-none" placeholder="Your message" {...register("message")} />

                    <button className="w-fit text-base text-white bg-slate-700 px-4 py-2 rounded-lg mx-auto" type="submit">Send Message</button>
                </motion.form>
            </div>
        </main>
    );
};