import Projectdescription from "../Projectdescription/description";






const Projects = () => {
     


    return (

        <div  className=" h-[100vh] w-full flex flex-col items-center justify-center bg-black text-white">
             <div className="flex flex-col items-center">
                <div className="mt-[25px] text-[50px] font-bold">Projects</div>
                <hr  className="w-[10vw] mw-[200 x]" />
                <div className="max-w-[600px] mt-[25px] text-[20px]">Here you will find some of the personal and school projects that I created, each accompanied by a detailed case study.</div>
            </div>
            <div className=" h-[100vh] w-full flex flex-wrap items-center justify-between bg-black text-white">
            <Projectdescription  name="macha" desctrption ="adasdasdasdasdadd"  image="myimage" />
            <Projectdescription  name="macha" desctrption ="adasdasdasdasdadd"  image="myimage" />
            
            <Projectdescription  name="macha" desctrption ="adasdasdasdasdadd"  image="myimage" />
            <Projectdescription  name="macha" desctrption ="adasdasdasdasdadd"  image="myimage" />
            
            </div>
        </div>

    );
}

export default Projects ;