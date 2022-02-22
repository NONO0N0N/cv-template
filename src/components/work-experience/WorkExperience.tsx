import ContentBoxDetail from "../content-box-detail/ContentBoxDetail"; 

interface props {
    experiences: {
        location: string;
        role: string;
        duration: string;
        details: {
            highlight: string;
            detail: string;
        }[];
    }[];
}

const WorkExperience = (props: props) => {
    return (
        <div className="WorkExperience content-box">
            <div className="topic">Work Experience </div>
            {props.experiences.map(experience => 
                <div className="list">
                    <div className="duration">
                        <div>{experience.duration}</div>
                    </div>
                    <div>
                        <div>{experience.location}</div>
                        <div>{experience.role}</div>
                        <ContentBoxDetail  details={experience.details}/>
                    </div>           
                </div>
            )}

        </div>
    )
}

export default WorkExperience;