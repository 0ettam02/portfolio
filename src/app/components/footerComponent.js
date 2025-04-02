import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-[#9381ff] py-4">
            <div className="flex justify-center">
                <p className="text-white">© 2025 Matteo Aruta - All rights reserved</p>
            </div>
            <div className="flex justify-center gap-4">
                <Link href={"https://github.com/0ettam02"}>
                <Image src="/github.png" width={30} height={30} alt="immagine github"/>
                </Link>

                <Link href={"https://www.linkedin.com/in/matteo-aruta-b25846231/"}>
                <Image src="/linkedin.png" width={30} height={30} alt="immagine linedin"/>
                </Link>

                <Link href={"https://it.fiverr.com/oettam2002/buying?source=avatar_menu_profile"}>
                <Image href="#" src="/fiverr.png" width={30} height={30} alt="immagine fiverr" className="bg-white rounded-full"/>
                </Link>
            </div>
        </div>
    );
}