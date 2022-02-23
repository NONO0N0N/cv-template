import React from 'react';

//import theme from template folder
import JustBlue from './template/justBlue/JustBlue';
import SaveBtn from './components/save button/SaveBtn';

import data from "./data/demo.json";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <JustBlue data={data} profile_image="../../data/test.png"/>
      <SaveBtn />
    </div>
  );
}

export default App;
