import React, { useRef, useEffect, useState, ReactInstance } from 'react';

//import theme from template folder
import JustBlue from './template/justBlue/JustBlue';
import SaveBtn from './components/save button/SaveBtn';

import data from "./data/data.json";
import "./App.scss";

function App() {
  const [currentPrintElement, setPrintElement] = useState<ReactInstance | null>();
  const printElement = useRef(null);

  useEffect(() => {
    const divElement = printElement.current;
    if (divElement !== currentPrintElement) {
      setPrintElement(divElement); 
    }
  });

  return (
    <div className="App">

      <div className="print-element" ref={printElement}>
        <JustBlue data={data} />
      </div>
      <SaveBtn printElement={printElement.current}/>
    </div>
  );
}

export default App;
