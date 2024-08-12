import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { workExperience } from "@/Data";

const Experience = () => {
    return (
        <>
            <div className="pt-5" id="experience">
                <h1 className="font-bold text-4xl md:text-5xl text-center text-textPrimary">
                    My{" "}
                    <span className="text-textSecondary">Work Experience</span>
                </h1>
                <div className=" flex items-center justify-center flex-wrap px-10 py-10 gap-[50px] ">
                    {workExperience.map((card) => (
                        <ShineBorder
                            className="relative flex w-[450px] max-[1030px]:w-[410px] max-[968px]:w-[500px] h-[300px] flex-col items-center justify-center overflow-hidden rounded-[20px] border md:shadow-xl cursor-pointer
                            max-sm:h-[250px]"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            duration={5}
                        >
                        <div
                            className="flex lg:flex-row flex-col lg:items-centerpy-6 md:p-5 p-5 gap-2 "
                            key={card.id}
                        >
                            <img
                                src={card.thumbnail}
                                alt={card.title} // Change alt text to something more descriptive
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold text-textSecondary max-[450px]:text-sm">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold text-paragraph max-[450px]:text-sm">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                        </ShineBorder>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Experience;
