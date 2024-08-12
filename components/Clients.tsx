import React from "react";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {testimonials} from "@/Data";

const Clients = () => {
    return (
      <>
          <div className="pt-20" id="testimonials">
              <h1 className="font-bold text-4xl md:text-5xl text-center text-textPrimary">
                  Kind words from{" "}
                  <span className="text-textSecondary">Clients and colleagues</span>
              </h1>
              <div className="flex flex-cols items-center">
                  <div className="min-h-[50vh] md:h-[32rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                      <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Clients;
