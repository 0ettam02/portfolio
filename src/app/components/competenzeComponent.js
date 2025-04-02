import Card from "./cardComponent";

export default function Competenze() {
    return (
        <div className="bg-white py-16">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-5xl text-black font-bold mt-10">My Skills</h1>
                <div className="bg-[#9381ff] w-30 h-2 rounded-full mt-4"></div>
            </div>
            <div className="flex flex-col items-center">
            <Card />
            </div>
        </div>
    );
}
