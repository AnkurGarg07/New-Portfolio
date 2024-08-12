import {projects} from "@/Data";
import {PinContainer} from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa";
import {BorderBeam} from "@/components/magicui/border-beam";
import React from "react";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <>
        <div className="pt-20 max-sm:pt-10" id="projects">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-textPrimary px-5">
                A small selection of{" "}
                <span className="text-textSecondary">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] sm:h-[41rem] h-[35rem] max-[525px]:h-[30rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title="/ui.aceternity.com"
                            href={item.link}
                        >
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden  mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="cover"
                                    style={{
                                        top: '40px',
                                        transform: 'rotate(6deg)'
                                    }}
                                    layout="fill"
                                    quality={100}
                                    loading="lazy"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-textPrimary">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-textSecondary">
                                        Check Repository
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default RecentProjects;
