'use client'
import Navabar from "../components/navebar/navebar";
import Introduction from "../components/Introduction/introduction"
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home() {


  
  
  return (
    <div className="bg-[#212121]">
     <Navabar/>
     <div id="home">
      <Introduction/>
     </div>
     <div id="about">
      <About/>
     </div>
     <div id="projects">
        <Projects/>
     </div>
     <div id="contact">
        <Contact/>
     </div>
 
    </div>
  );
}
