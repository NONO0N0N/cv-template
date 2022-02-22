import ContentBoxDetail from "../content-box-detail/ContentBoxDetail";

interface props {
    projects: {
        name: string;
        role: string;
        duration: string;
        details: {
            highlight: string;
            detail: string;
        }[];
    }[];
}

const Projects = (props: props) => {

    return (
        <div className="Project content-box">
            <div className="topic">Projects </div>
            {props.projects.map(project => 
                <div className="list">
                    <div className="duration">
                        <div>{project.duration}</div>
                    </div>
                    <div>
                        <div>{project.name}</div>
                        <div>{project.role}</div>
                        <ContentBoxDetail details={project.details}/>
                    </div>           
                </div>
            )}

        </div>
    )
}

export default Projects;