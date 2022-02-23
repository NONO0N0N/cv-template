import Linkedin from "../../icon/tsx/Linkedin";
import Mail from "../../icon/tsx/Mail";
import Github from "../../icon/tsx/Github";

interface props {
    name: string;
    contact: { email?: string; linkdin?: string; github?: string; };
}

const CVHeader = (props: props) => {
    return (
        <div className="CVHeader">

            <img src={require("../../data/profile.png")} alt="" />
            <div className="name">{props.name}</div>

            <div className="contact">
                {!props.contact.email || props.contact.email === "" ? null : (<span><Mail />{props.contact.email}</span>)}
                {!props.contact.linkdin || props.contact.linkdin === "" ? null : (<span><Linkedin />{props.contact.linkdin}</span>)}
                {!props.contact.github || props.contact.github === "" ? null : (<span><Github />{props.contact.github}</span>)}
            </div>
        </div>
    )
}

export default CVHeader;