
type SkillsProps = {
    skill: string;
  };


const Skills =({skill }: SkillsProps) => {


    return (
        <div  className="border rounded-full flex items-center justify-center text-center text-center border-white h-[40px]  w-[160px]" >{skill}</div>

    );
}

export default Skills