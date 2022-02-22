import Linkedin from "../../icon/tsx/Linkedin";
import Mail from "../../icon/tsx/Mail";
import Github from "../../icon/tsx/Github";

interface props {
    name: string;
    contact: { email?: string; linkdin?: string; github?: string; };
    profile_image: string;
}

const CVHeader = (props: props) => {
    return (
        <div className="CVHeader">

            <img src={require("../../data/test.png")} alt="" />
            <div className="name">{props.name}</div>

            <div className="contact">
                {props.contact.email !== null ? (<span><Mail />{props.contact.email}</span>) : null}
                {props.contact.linkdin !== null ? (<span><Linkedin />{props.contact.linkdin}</span>) : null}
                {props.contact.github !== "" || props.contact.github === undefined ? (<span><Github />{props.contact.github}</span>): (<p>null</p>) }
            </div>
        </div>
    )
}

export default CVHeader;