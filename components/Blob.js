"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    const blob = document.getElementById("blob");
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`
        },
        { duration: 2000, fill: "forwards" }
    );
};

export default function Blob() {
    useEffect(() => {
        window.addEventListener('pointermove', handlePointerMove);
      
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('pointermove', handlePointerMove);
        };
      }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1}}
            id="blob" 
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34vmax] h-[34vmax] rounded-full z-[1]" 
        />
    );
};