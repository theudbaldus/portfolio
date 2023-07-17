"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { worksData } from "@/data/worksData";

export default function BottomNavigator() {
    const location = usePathname();
    let workId;
    let currentIndex;
    let previousIndex;
    let nextIndex;

    if (location === "/") {
        previousIndex = worksData.length - 1;
        nextIndex = 0;
    } else {
        workId = location.split("/works/")[1];
        currentIndex = worksData.findIndex((work) => work.id === workId);

        if (currentIndex === worksData.length - 1) {
            previousIndex = currentIndex - 1;
            nextIndex = 0;
        } else {
            previousIndex = currentIndex - 1;
            nextIndex = currentIndex + 1;
        };
    };

    return (
        <AnimatePresence>
            {location !== "/menu" && location !== "/about" && location !== "/contact" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.5 } }} transition={{ duration: 0.5, delay: 2 }} className="w-full md:w-fit absolute bottom-[16px] lg:bottom-[32px] left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 lg:gap-16 text-white select-none z-[20]">

                    <Link href={currentIndex === 0 ? "/" : `/works/${worksData[previousIndex]?.id}`}>
                        <div className="w-[33vw] md:w-[25vw] lg:w-[15vw] flex flex-col items-end">
                            <span className="text-sm md:text-base">{currentIndex === 0 ? "#0 - Home" : `#${previousIndex + 1} - ${worksData[previousIndex]?.name}`}</span>
                            <span className="w-full h-[2px] bg-white" />
                        </div>
                    </Link>

                    <Link href={nextIndex === 0 && currentIndex !== undefined ? "/" : `/works/${worksData[nextIndex]?.id}`}>
                        <div className="w-[33vw] md:w-[25vw] lg:w-[15vw] flex flex-col">
                            <span className="text-sm md:text-base">{nextIndex === 0 && currentIndex !== undefined ? "#0 - Home" : `#${nextIndex + 1} - ${worksData[nextIndex]?.name}`}</span>
                            <span className="w-full h-[2px] bg-white" />
                        </div>
                    </Link>
                    
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};