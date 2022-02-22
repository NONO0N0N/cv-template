import React from 'react';

import JustBlue from './template/justBlue/JustBlue';

import data from "./data/demo.json";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <JustBlue data={data} profile_image="../../data/test.png"/>
    </div>
  );
}

export default App;
