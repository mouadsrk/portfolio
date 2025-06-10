import { Button } from "@mui/material";
import Skills from "../Skills/skills";



const myskills:string[] = [
    "next",
    "react",
    "java",
    "c",
    "c++",
    "php",
    "laravel",
]



const About = () => {



    return (
        <div className=" h-[150vh] w-full   text-white">
            <div className="flex flex-col items-center pt-[200px] mb-[150px]">
                <div className="mt-[25px] text-[50px] font-bold"> About Me</div>
                <hr  className="w-[10vw] mw-[200 x]" />
                <div className="max-w-[600px] mt-[25px] text-[20px]">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
            </div>
            <div>
                <div   className="float-left w-1/2 pl-[20px]" >
                    <div className=" pl-[5px]" >Get to know me!</div>
                    <div className="max-w-[400px] mt-4 text-[18px]  leading-relaxed ">
                        I'm a passionate full-stack developer with a strong foundation in modern web technologies.  
                        I love creating efficient, scalable, and user-friendly applications that solve real problems.  
                        Continuously learning and experimenting with new tools and frameworks,  
                        I thrive in collaborative environments and enjoy tackling challenges head-on.  
                        Currently, I specialize in JavaScript, React, Next.js, Laravel, and backend development,  
                        but I’m always eager to expand my skill set and contribute to innovative projects.
                    </div>
                    <div className="mt-4 text-bold"  >
                        <Button  variant="contained">CONTACT</Button>

                    </div>
                </div>
                <div  className="w-1/2 float-left">
                    <div className="mt-[45px] pl-[20px]">My Skills</div>
                    <div className="w-full h-[30vh]  mt-4 flex flex-wrap items-center  justify-around  gap-4 ">

                        {
                            myskills.map((skill:string , idx : number) =>
                                
                                (
                                    <Skills key={idx} skill={skill}/>
                                )
                            )
                        }
                    </div>

                </div>
            </div>

        </div>

    );
}

export default About ;