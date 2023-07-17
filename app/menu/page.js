"use client";
import Link from "next/link";
import Image from "next/image";
import { worksData } from "@/data/worksData";
import { motion } from "framer-motion";

const textMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    hidden: {
        opacity: 0
    }
};

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
};

export default function Menu() {
    return (
        <main className="w-screen h-screen flex flex-col text-white select-none overflow-hidden">
            <div className="z-[10] w-full overflow-scroll">
                <div className="px-4 md:px-[128px] py-[64px] md:py-[86px] lg:py-[128px] flex flex-col gap-8 md:gap-16">
                    <Link href="/">
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            className="text-xl"
                        >
                            Home
                        </motion.p>
                    </Link>

                    <motion.div variants={textMotion} animate="visible" initial="hidden" className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-16">
                        {worksData.map((work, i) => (
                            <Link key={work.id} href={`/works/${work.id}`}>
                                <motion.div variants={itemMotion} className="flex flex-row lg:flex-col-reverse items-center lg:items-start gap-4 md:gap-8 lg:gap-2">
                                    <Image className="w-[40vw] lg:w-full h-auto" src={work.image} alt={work.name} width={1920} height={1080} priority />
                                    <h2 className="text-xl">{work.name}</h2>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>

                    <Link className="md:hidden" href="/about">
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.25, delay: 1.25 }}
                            className="text-xl"
                        >
                            About
                        </motion.p>
                    </Link>

                    <Link className="hidden md:block" href="/contact">
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.25, delay: 1.25 }}
                            className="text-xl"
                        >
                            Contact
                        </motion.p>
                    </Link>

                    <motion.a
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.25, delay: 1.5 }}
                        className="md:hidden text-xl"
                        href="https://github.com/theudbaldus"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </motion.a>
                </div>
            </div>
        </main>
    );
};