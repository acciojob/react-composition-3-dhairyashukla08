import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <h2 className="top">Hover over the text below:</h2>
      
      <Tooltip text="This is a tooltip!">
        <p>Hover over me to see the magic.</p>
      </Tooltip>

      <br />

      <Tooltip text="Another tooltip here!">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
}

export default App;
