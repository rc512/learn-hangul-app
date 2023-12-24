import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as hangul from "hangul-js";

function App() {
  let x = hangul.disassemble("가나다"); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']
  return (
    <div className="App">
      {x}
      <Selector />
    </div>
  );
}

function Selector() {
  return (
    <>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    
  </>
  )
}

export default App;
