import {ReactElement, ReactNode} from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {BorderBeam} from "@/components/magicui/border-beam";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[15rem] 480px:auto-rows-[20rem] sm:auto-rows-[23rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
                       name,
                       className,
                       background,
                       Icon,
                       description,
                       href,
                       cta,
                   }: {
    name: string;
    className: string;
    background: ReactElement<typeof Image >;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
            "transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] md:justify-self-center md:w-[65%] lg:w-[100%] lg:col-span-1",
            className
        )}
    >
        <div className="z-[-5] absolute inset-0">{background}</div>

        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 relative transform-gpu transition-all duration-300 group-hover:-translate-y-10">
            <div className="mt-auto">
                <Icon className="h-12 w-12 origin-left transform-gpu text-textPrimary transition-all duration-300 ease-in-out group-hover:scale-75" />
                <h3 className="text-xl font-semibold text-textPrimary">
                    {name}
                </h3>
                <p className="max-w-lg text-neutral-300">{description}</p>
            </div>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
                <a href={href} target="_blank">
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        <BorderBeam size={250} duration={10} delay={9} />
    </div>
);
;

export { BentoCard, BentoGrid };
