"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function TopLinks() {
    const path = usePathname();

    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2 }} className="absolute top-[16px] lg:top-[32px] w-full flex justify-end md:justify-between items-center text-white px-4 md:px-8 lg:px-16 z-[20] select-none">
            <div className="w-fit flex gap-2">
                {path !== "/" ? (
                    <div className="hidden w-fit md:flex gap-2">
                        <Link href="/">
                            <span className="font-bold">Thibault Thomas</span>
                        </Link>
                        <span>/</span>
                    </div>
                ) : null}

                {path !== "/about" ? (
                    <Link href="/about">
                        <span className="lg:text-base">About</span>
                    </Link>
                ) : null}

                {path === "/about" ? (
                    <Link href="/">
                        <span className="lg:text-base">Home</span>
                    </Link>
                ) : null}
            </div>
            <a className="hidden md:block lg:text-base" href="https://github.com/theudbaldus" target="_blank" rel="noreferrer">Github</a>
        </motion.div>
    );
};