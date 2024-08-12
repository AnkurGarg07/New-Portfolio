import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {navItems} from "@/Data";
import "./globals.css"
import {Skills} from "@/components/Skills";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
       <main className="overflow-clip box-border">
           <FloatingNav navItems={navItems}/>
           <Hero/>
           <Grid/>
           <RecentProjects/>
           <Skills/>
           <Clients/>
           <Experience/>
           <Approach/>
           <Footer/>

       </main>

   </>
  );
}
