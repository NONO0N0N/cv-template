import Download from "../../icon/tsx/Download";


const SaveBtn = () => {
    return (
        <button className="SaveBtn" onClick={(event: React.MouseEvent<HTMLElement>) => console.log("click")}>
            <Download />
        </button>
    )
}

export default SaveBtn;