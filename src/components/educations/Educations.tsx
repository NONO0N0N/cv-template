interface props {
    educations: {
        school: string;
        course: string;
        duration: string;
    }[];
}

const Educations = (props: props) => {

    return (
        <div className="Education content-box">
            <div className="topic">Education </div>
            {props.educations.map(education => 
                <div className="list">
                    <div className="duration">
                        <div>{education.duration}</div>
                    </div>
                    <div>
                        <div>{education.course}</div>
                        <div>{education.school}</div>
                    </div>           
                </div>
            )}

        </div>
    )
}

export default Educations;