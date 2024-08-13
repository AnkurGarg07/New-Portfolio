import { socialMedia } from "@/Data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "@/components/ui/magic-button";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer
        className=" relative z-10 rounded-md bg-primaryDark flex flex-col items-center justify-center w-full py-20 max-sm:py-10"
        id="contact"
      >
        <div className="flex flex-col items-center w-[50%] max-sm:w-[80%]">
          <h1 className="font-bold text-4xl md:text-5xl text-center text-textPrimary">
            Ready to take <span className="text-textSecondary">your</span>{" "}
            digital presence to the next level?
          </h1>
          <p className="text-paragraph md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <Link
            href="mailto:ankurgarg89p@gmail.com"
            className="w-full md:w-60 pointer-events-auto max-sm:w-[80%] "
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
        <div className="w-full flex mt-16 md:flex-row flex-col justify-between items-center px-10 gap-[10px]">
          <p className="md:text-base text-sm md:font-normal font-light text-paragraph">
            Copyright © 2024 Ankur Garg
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Link href={info.link} target="_blank">
                  {" "}
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </footer>
    </>
  );
};

export default Footer;
