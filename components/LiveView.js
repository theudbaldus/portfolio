export default function LiveView({ link, color }) {
    return (
        <a href={link} target="_blank" relf="noreferrer">
            <div style={{ backgroundColor: color }} className="absolute top-[33vw] right-[5vw] w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] flex flex-col items-center justify-center font-bold text-white rounded-full z-[20]">
                Visit
            </div>
        </a>
    );
};