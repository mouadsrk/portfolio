import { Button } from "@mui/material";




const  Introduction = ()=> {

    return (
        <div className=" flex  h-[100vh] w-full flex-col items-center justify-center text-white h-screen bg-[url('/1337-ocp-dark.jpg')] bg-cover bg-center " >
           
            <div className="mt-[25px] text-[50px] font-bold " style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }} >HEY, I'M MOUAD</div> 
            <div className="mt-[25px] text-[50px] font-bold " style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}> SERROUKH</div>
            <div className="max-w-[800px] mt-[25px] text-[20px] " style={{ textShadow: '0 4px 8px rgba(0,0,0,0.6)' }}>I craft modern,  responsive, and user-focused web applications as a full-stack developer, combining clean code with thoughtful design and seamless user experience.</div>
            
            <div className="mt-[60px]">

            <div className="rounded-4 border-white border-[2px]">
                <a href="#projects">PROJECT</a>
            </div>
            </div>
        </div>


    );



}


export default Introduction ;