
type SkillsProps = {
    skill: string;
  };


const Skills =({skill }: SkillsProps) => {


    return (
        <div>{skill}</div>

    );
}

export default Skills