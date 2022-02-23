import Download from "../../icon/tsx/Download";
import { useReactToPrint } from 'react-to-print';
import { ReactInstance } from "react";

interface props {
    printElement: ReactInstance | null;
}

const SaveBtn = (props: props) => {
    console.log(props.printElement);

    const handlePrint = useReactToPrint(
        {
        content: () => props.printElement,
        onBeforePrint: () => console.log("printing"),
        onPrintError: () => console.log("error: cannot print")
      });

    return (
        <div className="SaveBtn" onClick={handlePrint}>
            <Download />
        </div>

    )
}

export default SaveBtn;