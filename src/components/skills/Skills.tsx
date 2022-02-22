interface props {
    skills: {
        name: string;
        detail: string;
    }[];
}

const Skills = (props: props) => {

    return (
        <div className="Skill content-box">
            <div className="topic">Skills </div>
            {props.skills.map(skill => 
                <div className="list">
                    <div>
                        <div><b>{skill.name}</b>:{skill.detail}</div>
                    </div>           
                </div>
            )}

        </div>
    )
}

export default Skills;