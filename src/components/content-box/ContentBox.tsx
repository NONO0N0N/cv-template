import ContentBoxDetail from "../content-box-detail/ContentBoxDetail";

interface props {
    topic: string;
    details: {
        header: string;
        sub_header: string;
        duration: string;
        details: {
            highlight: string;
            detail: string;
        }[];
    }[];
}

const ContentBox = (props: props) => {

    return (
        <div className="Project content-box">
            <div className="topic">{props.topic} </div>
            {props.details.map(detail => 
                <div className="list">
                    <div className="duration">
                        <div>{detail.duration}</div>
                    </div>
                    <div>
                        <div>{detail.header}</div>
                        <div>{detail.sub_header}</div>
                        {detail.details ? <ContentBoxDetail details={detail.details}/>: null}
                        {/* <ContentBoxDetail details={detail.details}/> */}
                    </div>           
                </div>
            )}

        </div>
    )
}

export default ContentBox;