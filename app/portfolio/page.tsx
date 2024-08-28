import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {

    return (
        <div className="">
            <div className="bg-lavender-400 w-full">
                <div className="h-[5.875rem] flex items-center justify-between w-full max-w-[80rem] mx-auto shadow">
                    <div>
                        <Link href="#home">
                            <span className="text-white text-3xl font-lilita font-bold">MI</span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-10 font-lato">
                        <Link href="#home">
                            <span className="text-white">Home</span>
                        </Link>
                        <Link href="#about">
                            <span className="text-white">About</span>
                        </Link>
                        <Link href="#portfolio">
                            <span className="text-white">Portfolio</span>
                        </Link>
                        <Link href="#portfolio">
                            <span className="text-white">Contact</span>
                        </Link>
                    </div>
                    <div>
                        <button className="border border-white rounded-full text-white px-5 py-2 text-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">Let’s Talk</button>
                    </div>
                </div>
            </div>
            <div className="bg-lavender-400 pt-20 pb-10">
                <div className="max-w-[80rem] mx-auto w-full">

                </div>
            </div>
        </div>
    )
}