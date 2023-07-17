export default function WorksBlob({ color }) {
    return (
        <div 
            style={{ backgroundColor: color}} 
            className="absolute md:-right-1/2 md:-translate-x-1/2 lg:translate-x-0 lg:right-0 w-[100vw] h-[100vw] md:w-[75vw] md:h-[75vw] lg:w-[50vw] lg:h-[50vw] opacity-[0.5] rounded-full z-[1] animate-blobGrow"
        />
    );
};