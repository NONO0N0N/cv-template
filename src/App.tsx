import React, { useRef } from 'react';

//import theme from template folder
import JustBlue from './template/justBlue/JustBlue';
import SaveBtn from './components/save button/SaveBtn';

import data from "./data/demo.json";
import "./App.scss";

function App() {
  const printElement = useRef(null);

  return (
    <div className="App">

      <div className="print-element" ref={printElement}>
        <JustBlue data={data} profile_image="../../data/test.png" />
      </div>
      <SaveBtn printElement={printElement.current}/>
    </div>
  );
}

export default App;
