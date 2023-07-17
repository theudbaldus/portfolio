"use client";
import Image from "next/image";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import portrait from "../../public/assets/about.webp";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="relative w-screen h-screen flex flex-col text-white select-none overflow-hidden">
            <div className="z-[10] w-full overflow-scroll">
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="flex flex-col lg:flex-row lg:items-center gap-8 px-4 md:px-[128px] py-[64px] md:py-[86px] lg:py-[128px]">
                    <Image className="w-[40vw] lg:w-[30vw] h-auto mx-auto" src={portrait} alt="portrait" width={1050} height={1050} />

                    <div className="flex flex-col gap-8">
                        <p className="text-base">Hi, I am Thibault Thomas and I use theudbaldus as nickname on social media. I am a frontend developer looking for a first professional experience.</p>

                        <p className="text-base">I use HTML, CSS, Javascript, React, Next.js, Tailwind, Sanity and a bit of Three.js.</p>

                        <p className="text-base">I love to learn new things and technologies and hope to make my skillset grow a lot with time.</p>

                        <a href="https://github.com/theudbaldus" target="_blank" rel="noreferrer">
                            <GrGithub className="w-6 h-6" />
                        </a>

                        <a href="mailto:thibault.thomas.dev@outlook.com" className="text-base font-bold">thibault.thomas.dev@outlook.com</a>

                        <Link href="/contact">
                            <p className="text-base underline">Contact Page</p>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};