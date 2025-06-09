import Image from "next/image";




const  Navebar = () => {

   

    return (
    <div className="fixed top-0 left-0 w-full h-[75px] w-[100vw] flex justify-between items-center px-[5%]  backdrop-blur-md shadow-sm shadow-white text-white text-sm">
        <div className="w-[28%] flex justify-between items-center ">
            <Image  className="rounded-full " src="/mouad_serroukh.jpg" alt="mouad serroukh" width="39" height ="20" />
            <div>MOUAD SERROUKH</div>
        </div>
        <div className="w-[50%] flex justify-between font-bold  ">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PROJECT</div>
            <div>CONTACT</div>
        </div>

    </div>
    )

}


export default Navebar;