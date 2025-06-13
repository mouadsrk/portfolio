import Image from "next/image";




const  Navebar = () => {

   

    return (
    <div className="fixed top-0 left-0 z-50 w-full h-[75px]  flex justify-between items-center px-[5%]  backdrop-blur-md  text-white text-sm">
        <div className="w-[28%] flex justify-between items-center ">
            <Image  className="rounded-full " src="/mouad_serroukh.jpg" alt="mouad serroukh" width="39" height ="20" />
            <div>MOUAD SERROUKH</div>
        </div>
        <div className="w-[50%] flex justify-between font-bold  ">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECT</a>
            <a href="#contact">CONTACT</a>
        </div>

    </div>
    )

}


export default Navebar;