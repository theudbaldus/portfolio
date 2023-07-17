"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ToggleMenu() {
    const location = usePathname();

    return (
        <Link href={location === "/menu" ? "/" : "/menu"}>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} className="absolute left-[16px] md:left-[32px] lg:left-[64px] top-[16px] md:top-1/2 md:-trans space-y-1 cursor-pointer z-50">
                <motion.span animate={{ rotateZ: location === "/menu" ? 45 : 0, y: location === "/menu" ? 6 : 0, width: location === "/menu" ? 20 : 24 }} className="block h-0.5 w-6 bg-white"></motion.span>
                <motion.span animate={{ width: location === "/menu" ? 0 : 20 }} className="block h-0.5 w-5 bg-white"></motion.span>
                <motion.span animate={{ rotateZ: location === "/menu" ? -45 : 0, y: location === "/menu" ? -6 : 0, width: location === "/menu" ? 20 : 16 }} className="block h-0.5 w-4 bg-white"></motion.span>
            </motion.div>
        </Link>
    );
};