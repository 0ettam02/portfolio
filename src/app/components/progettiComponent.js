import CardProgetti from "./cardProgettiComponent";

export default function Progetti() {
    return (
        <>
        <div className="py-16">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-5xl font-bold mt-10">My Projects</h1>
                <div className="bg-[#9381ff] w-30 h-2 rounded-full mt-4"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <CardProgetti />
            </div>
        </div>
        </>
    );
}