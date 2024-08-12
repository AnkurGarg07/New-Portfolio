import {
    LinkedInLogoIcon,
    GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
export const features = [
    {
        Icon: LinkedInLogoIcon,
        name: "LinkedIn",
        description: "Connect with me on LinkedIn",
        href: "https://www.linkedin.com/in/ankur-garg07/",
        cta: "Connect",
        background:<Image src="/card1.png" alt="Background" layout="fill" quality={100}  />,
        className: "col-span-3 bg-primaryBlack text-textPrimary",
    },
    {
        Icon: GitHubLogoIcon,
        name: "Github",
        description: "Explore My GitHub Projects",
        href: "https://github.com/AnkurGarg07",
        cta: "Connect",
        background: <Image src="/github.jpg" alt="Background" layout="fill" quality={100} objectFit="cover"/>,
        className: "col-span-3 text-textPrimary ",
    },
    {
        Icon: SiGmail,
        name: "Gmail",
        description: "Reach Out via Email",
        href: "mailto:ankurgarg89p@gmail.com",
        cta: "Connect",

        background: <Image src="/gmail.jpg" alt="Background" layout="fill" quality={100} objectFit="cover"/>,
        className: "col-span-3 bg-primaryBlack text-textPrimary ",
    },

];


export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/project2.png",
        iconLists: ["django.webp",  "JavaScript.webp","/tail.svg", "/fm.svg"],
        link: "https://github.com/AnkurGarg07/ArtGround",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/project4.png",
        iconLists: ["django.webp",  "JavaScript.webp","/tail.svg", "/fm.svg"],
        link: "https://github.com/AnkurGarg07/Magnus-project",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project3.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/magicui.webp"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/project1.png",
        iconLists: ["/re.svg", "JavaScript.webp", "/tail.svg", "/app.svg", "/vercel.webp"],
        link: "https://github.com/AnkurGarg07/React-mega-project",
    },
];


export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {name:"testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },

];


export const testimonials = [
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];


export const workExperience = [
    {
        id: 1,
        title: "Tech Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance Web Dev Project",
        desc: "Led the dev of a web app for a client, from planning to development and delivery.",
        className: "", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Programming Mentor",
        desc: "lead the programming domain of my college's technical society, ACE.",
        className: "",
        thumbnail: "/exp4.svg",
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link:"https://github.com/AnkurGarg07"
    },

    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/ankur-garg07/"
    },
];