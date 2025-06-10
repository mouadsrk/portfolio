import Image from "next/image";




const Projectdescription = (name : string , description : string , image : string ) =>
{
    return (
        <div className="m-auto border-[2px] p-3 rounded-[10px]  border-white w-[380px] h-[240px]">
            <div className="relative   h-[60%] w-[100%] ">
                <Image  className="rounded-md"  src="/ping_pong.jpeg" fill alt="ProjectImage"  />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="pl-1 size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
            </svg>
            <div className="pl-1">Ping Pong</div>
            <div className="text-sm  ">web application that combines ping pong gameplay with integrated chat and friend</div>

        </div>


    )

}

export default Projectdescription ;