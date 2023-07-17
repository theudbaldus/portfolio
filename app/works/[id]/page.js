"use client"
import { useState } from "react";
import Image from "next/image";
import { worksData } from "@/data/worksData";
import WorksBlob from "@/components/WorksBlob";
import { motion, AnimatePresence } from "framer-motion";

export default function Work({ params }) {
    const [toggleInfo, setToggleInfo] = useState(false);
    const currentIndex = worksData.findIndex((work) => work.id === params.id);
    const work = { ...worksData[currentIndex] };

    return (
        <main className="relative w-screen h-screen flex flex-col items-center justify-center gap-8 px-4 md:px-0 text-white overflow-hidden">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="static lg:absolute left-[10vw] w-full md:w-[60vw] lg:w-[40vw] flex flex-col gap-4 text-white z-[30]">
                <h2 className="flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-bold">
                    #{currentIndex + 1} - {work.name} 
                    <a href={work?.link} style={{ backgroundColor: work?.color }} className="text-base px-4 py-2 rounded-lg">Visit</a>
                </h2>
                <p className="md:text-xl">{work.type}</p>
                <p className="hidden md:block md:text-base leading-normal">{work.description}</p>
                <div className="hidden md:flex gap-2 items-center flex-wrap">
                    {work?.techStack?.map((tech, i) => (
                        <span key={tech + i} className="py-2 px-4 bg-slate-700 rounded-lg">{tech}</span>
                    ))}
                </div>
                <span className="md:hidden text-base font-bold underline select-none cursor-pointer" onClick={() => setToggleInfo((prevToggle) => !prevToggle)}>See information</span>
            </motion.div>

            <AnimatePresence>
                {toggleInfo ? (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ ease: "easeInOut" }}
                        className="md:hidden absolute right-0 w-[100vw] h-screen flex flex-col gap-8 px-8 py-16 bg-darkBg/90 backdrop-blur z-[40] overflow-x-scroll"
                    >
                        <span className="text-base font-bold underline cursor-pointer select-none" onClick={() => setToggleInfo((prevToggle) => !prevToggle)}>Close</span>
                        <h2 className="text-xl font-bold">#{currentIndex + 1} - {work.name}</h2>
                        <p className="text-base">{work.type}</p>
                        <p className="text-base leading-normal">{work.description}</p>
                        <div className="flex gap-2 items-center flex-wrap">
                            {work?.techStack?.map((tech, i) => (
                                <span key={tech + i} className="text-sm py-2 px-4 bg-slate-700 rounded-lg">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            {/* <LiveView link={work?.link} color={work?.color} /> */}

            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="static lg:absolute z-[10] w-full md:w-[60vw] lg:w-[40vw] right-[5vw] h-auto">
                <Image className="w-full h-auto rounded-lg" src={work?.image} alt={work.id} width={1920} height={1080} priority={true} />
            </motion.div>
            {/* <Image className="static lg:absolute z-[10] w-full md:w-[60vw] lg:w-[40vw] right-[5vw] rounded-lg h-auto" src={work?.image} alt={work.id} width={1920} height={1080} priority /> */}

            {/* <WorksBlob color={work?.color} /> */}
        </main>
    );
};