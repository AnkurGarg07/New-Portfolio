"use client"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {features} from "@/Data";
const Grid = () => {
    return (
      <>
         <div id="connect">
             <BentoGrid className="py-10 px-5">
                 {features.map((feature) => (
                     <BentoCard key={feature.name} {...feature} />

                 ))}

             </BentoGrid>
         </div>
      </>
    );
}

export default Grid;
