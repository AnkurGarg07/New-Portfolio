import Meteors from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import BlurIn from "@/components/magicui/blur-in";
import { FaLocationArrow } from "react-icons/fa";

import Link from "next/link";
const Hero  = () => {
    return (
        <>
            <div
                className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-primaryDark md:shadow-xl">
                <div className="flex gap-3 max-[1138px]:flex-col px-5  max-[554px]:p-0 max-[554px]:gap-0" >
                    <BlurIn
                        word="Turning Ideas into"
                        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-white to-slate-600/60 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent max-[426px]:text-[40px]"
                    />
                    <BlurIn
                        word="Digital Reality"
                        className="bg-gradient-to-t from-textSecondary to-slate-400/80 bg-clip-text text-5xl  leading-none text-transparent max-[426px]:text-[40px]"
                    />
                </div>
                <span
                    className="mt-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-textPrimary to-slate-400/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent max-[1095px]:text-xl px-5">Hi, I'm
                    <span className=" bg-gradient-to-t from-textSecondary to-slate-400/80 bg-clip-text leading-none text-transparent"> Ankur Garg</span>
                    , a passionate creator focused on crafting innovative digital solutions.</span>
                <div className="z-10 flex mt-5 items-center justify-center bg-primaryDark">
                    <Link href="#projects" passHref>
                        <ShimmerButton className="shadow-2xl">
                            <div className="flex justify-center items-center gap-3">
                            <span
                                className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-textPrimary lg:text-lg">
                            See my work
                            </span>
                                <FaLocationArrow/>
                            </div>
                        </ShimmerButton>
                    </Link>
                </div>
                <Meteors number={60}/>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />

            </div>
        </>
    );
}

export default Hero;
