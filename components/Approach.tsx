"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Approach() {
    return (
        <div className="w-full pt-20 max-sm:pt-5">
            <h1 className="font-bold text-4xl md:text-5xl text-center text-textPrimary">
                My{" "}
                <span className="text-textSecondary">approach</span>
            </h1>
            <div className="mt-20 max-sm:mt-10 max-[440px]:px-[20px] mb-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:p-5">
                <Card
                    title="Planning & Strategy"
                    icon={<AceternityIcon order="Phase1"/>}
                    des="We'll collaborate to map out your website's goals, target audience,and key functionalities. We'lldiscuss things like site structure,navigation, and content requirements.">
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Development & Progress Update"
                    icon={<AceternityIcon order="Phase2"/>}
                    des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-red-200"
                        colors={[
                            [204, 0, 0],
                            [204, 0, 0],
                        ]}
                    />
                    <div
                        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"/>
                </Card>
                <Card
                    title="Deployement & Delivery"
                    icon={<AceternityIcon order="phase3"/>}
                    des="This is where the magic happens! Based on the approved design,I'll translate everything into functional code, building your websit from the ground up."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </div>
    );
}

const Card = ({title, icon, children,des}: { title: string; icon: React.ReactNode; children?: React.ReactNode;des:string }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full p-4 relative h-[30rem] bg-[rgb(4,7,29)]/[0.2] rounded-[20px] max-[450px]:h-[25rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-textPrimary " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-textPrimary" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-textPrimary " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-textPrimary" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className=" text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-textPrimary text-center">
                    {title}
                </h2>
                <h2 className=" text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-textPrimary text-center">
                    {des}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({order}: { order: string }) => {
    return (
        <div>
            <button
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[60px] py-3 text-xl  font-bold text-white backdrop-blur-3xl">{order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};
