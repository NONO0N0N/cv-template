import React from "react";
import CVHeader from "../../components/cv-header/CVHeader";
import Educations from "../../components/educations/Educations";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import WorkExperience from "../../components/work-experience/WorkExperience";

import "./JustBlue.scss";

interface headerProps {
    data: any;
    profile_image: string;
}

const JustBlue = (props: headerProps) => {
    return (
        <div className="just-blue">
            <CVHeader name={props.data.name} contact={props.data.contact} profile_image={props.profile_image}/>
            <div className="center-div">               
                <Skills skills={props.data.skills} />
                <Educations educations={props.data.educations} />
                <Projects projects={props.data.projects} />
                <WorkExperience experiences={props.data.work_experience} />
            </div>
        </div>
    )
}

export default JustBlue;