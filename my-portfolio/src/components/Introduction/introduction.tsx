import { Button } from "@mui/material";




const  Introduction = ()=> {

    return (
        <div className=" flex  h-[100vh] w-full flex-col items-center justify-center text-white bg-black " >
            <div className="mt-[25px] text-[50px] font-bold" >HEY, I'M MOUAD</div> 
            <div className="mt-[25px] text-[50px] font-bold"> SERROUKH</div>
            <div className="max-w-[600px] mt-[25px] text-[20px]">I craft modern, responsive, and user-focused web applications as a full-stack developer, combining clean code with thoughtful design and seamless user experience.</div>
            <div className="mt-[60px]">

            <Button className=""  variant="contained">Projects</Button>
            </div>
        </div>


    );



}


export default Introduction ;