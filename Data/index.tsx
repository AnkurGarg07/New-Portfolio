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
        title: "ArtGround: Creative Hub",
        des: "Discover a curated collection of unique and original artworks from talented artists around the world",
        img: "/project2.png",
        iconLists: ["/django.webp",  "/JavaScript.webp","/tail.svg", "/fm.svg"],
        link: "https://github.com/AnkurGarg07/ArtGround",
    },
    {
        id: 2,
        title: "JALA Magnus app",
        des: "Developed the Magnus application during my internship, delivering a powerful tool for managing the staff",
        img: "/project4.png",
        iconLists: ["/django.webp",  "/JavaScript.webp","/tail.svg", "/fm.svg"],
        link: "https://github.com/AnkurGarg07/Magnus-project",
    },
    {
        id: 3,
        title: "Personal Portfolio",
        des: "Explore my portfolio, built with Next.js, featuring cool components crafted with AccertinityUI and MagicUI for a stunning and interactive experience.",
        img: "/project3.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/magicui.webp"],
        link: "https://github.com/AnkurGarg07/New-Portfolio",
    },
    {
        id: 4,
        title: "The Tweet Project",
        des: "Project made during the learning phase of ReactJS with the power of appwrite for the backend",
        img: "/project1.png",
        iconLists: ["/re.svg", "/JavaScript.webp", "/tail.svg", "/app.svg", "/vercel.webp"],
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
            "As I worked with Ankur on a Freelance Project, I found him very motivated and Excited about the work and learnings. He always tries to deliver his work on time and with very refinements. It was a great experience to work with him and looking for more opportunities for further collaborations.",
        name: "Divanshu Soni",
        title: "UI/UX designer",
        image:"/avatar.png"
    },
    {
        quote:
            "Collaborating with Ankur on the development of our full-stack eCommerce website for art products was a seamless experience. His technical expertise and attention to detail ensured that the final product perfectly aligned with our vision. Ankur's commitment to delivering high-quality work made the entire process smooth and stress-free.",
        name: "Divit Sahni",
        title: "Student",
        image:"/testimonial.jpg"
    },
    {
        quote:
            "Collaborating with Ankur was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ankur's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ankur is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
        image:"/profile.svg"
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
        title: "Multidisciplinary Educator",
        desc: "Teach Python programming and MySQL database management to students, focusing on practical skills and real-world applications.",
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