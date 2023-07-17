export default function Background() {
    return (
        <>
            <div className="absolute left-0 top-0 w-screen h-screen bg-noise opacity-[0.09] z-[3]" />
            <div className="absolute left-0 top-0 w-screen h-screen backdrop-blur-xl z-[2]" />
        </>
    );
};