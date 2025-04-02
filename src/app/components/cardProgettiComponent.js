import Image from "next/image";

export default function CardProgetti() {
    return (
        <>
        <div className="relative w-[300px] h-[300px] mt-10">
            <div>
                <Image src="/image.png" alt="Placeholder" layout="fill" objectFit="cover" className="rounded-lg opacity-100 hover:scale-105 hover:opacity-30 duration-300" />

                <div className="text-center text-xl font-bold">
                    <h1>Object detection model of orchids as natural indicators of biodiversity</h1>
                </div>
            </div>
        </div>

        <div className="relative w-[300px] h-[300px] mt-10">
            <div>
                <Image src="/fantamind.png" alt="Placeholder" layout="fill" objectFit="cover" className="rounded-lg opacity-100 hover:scale-105 hover:opacity-30 duration-300" />

                <div className="text-center text-xl font-bold">
                    <h1>statistical and artificial intelligence model capable of making predictions about the world of fantasy football</h1>
                </div>
            </div>
        </div>

        <div className="relative w-[300px] h-[300px] mt-10">
            <div>
                <Image src="/hivemind.png" alt="Placeholder" layout="fill" objectFit="cover" className="rounded-lg opacity-100 hover:scale-105 hover:opacity-30 duration-300" />

                <div className="text-center text-xl font-bold">
                    <h1>academic social network where users upload their innovative ideas, and other users can rate them</h1>
                </div>
            </div>
        </div>
        </>
    );
};
