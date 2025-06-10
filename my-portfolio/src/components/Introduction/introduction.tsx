import { Button } from "@mui/material";




const  Introduction = ()=> {

    return (
        <div className=" flex  h-[100vh] w-full  text-white h-screen bg-[url('/1337-ocp-dark.jpg')] bg-cover bg-center " >
         <div  className="flex  h-[100vh] w-full flex-col items-center justify-center bg-black/50 ">
            <div className="mt-[25px] text-[50px] font-bold " style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }} >HEY, I'M MOUAD</div> 
            <div className="mt-[25px] text-[50px] font-bold " style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}> SERROUKH</div>
            <div className=" text-center  max-w-[800px] mt-[25px] font-medium text-[20px]   " style={{ textShadow: '0 4px 8px rgba(0,0,0,0.6)' }}>I craft modern,  responsive, and user-focused web applications as a full-stack developer, combining clean code with thoughtful design and seamless user experience.</div>
            
            <div className="mt-[60px]">

                <div className=" rounded-full w-[150px] h-[40px] font-medium text-[20px] border-white border-[1px] flex items-center justify-center bg-black/30 backdrop-blur-sm bg-black/30   hover:bg-black/50 transition-all duration-300 shadow-2xl">
                    <a href="#projects">PROJECTS</a>
                </div>
            </div>

         </div>
        </div>


    );



}


export default Introduction ;