"use client"
import Blob from "@/components/Blob";
import Background from "@/components/Background";
import { motion } from "framer-motion";

const textMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.75
        }
    },
    hidden: {
        opacity: 0
    }
};

const itemMotion = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 }
};


export default function Home() {
    return (
        <main className="relative h-screen w-screen overflow-hidden">
            <motion.div variants={textMotion} animate="visible" initial="hidden" className="absolute h-full w-full flex flex-col gap-4 items-center justify-center z-[10] select-none">
                <motion.p variants={itemMotion} className="text-2xl md:text-3xl lg:text-4xl text-gray-300">Hi, I'm</motion.p>
                <motion.h1 variants={itemMotion} className="text-4xl md:text-6xl lg:text-8xl text-white tracking-[0.3rem] md:tracking-[1rem] text-center select-none">thibault thomas</motion.h1>
                <motion.p variants={itemMotion} className="text-2xl md:text-3xl lg:text-4xl text-gray-300">Frontend Developer</motion.p>
            </motion.div>

            {/* <Background /> */}
        </main>
    );
};
