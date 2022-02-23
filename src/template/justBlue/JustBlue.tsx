import React from "react";
import CVHeader from "../../components/cv-header/CVHeader";
import Skills from "../../components/skills/Skills";

import ContentBox from "../../components/content-box/ContentBox";

import "./JustBlue.scss";

interface headerProps {
    data: any;
}

const JustBlue = (props: headerProps) => {
    return (
        <div className="just-blue">
            <CVHeader name={props.data.name} contact={props.data.contact}/>
            <div className="center-div">               
                <Skills skills={props.data.skills} />
                <ContentBox topic={props.data.educations.topic} details={props.data.educations.details} />
                <ContentBox topic={props.data.projects.topic} details={props.data.projects.details} />
                <ContentBox topic={props.data.work_experience.topic} details={props.data.work_experience.details} />
            </div>
        </div>
    )
}

export default JustBlue;