import React from "react";

interface props {
    details: {
        highlight: string;
        detail: string;
    }[];
}

const ContentBoxDetail = (props: props) => {
    console.log(props);
    return (
        <ul className="content-box-detail">
            {props.details.map(detail =>
                <li>
                    <b>{detail.highlight}: </b>{detail.detail}
                </li>
            )}
        </ul>

    )
}

export default ContentBoxDetail;