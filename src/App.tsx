import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as hangul from "hangul-js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function App() {
  let x = hangul.disassemble("가나다"); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']
  return (
    <div className="App">
      <Selector />
    </div>
  );
}

function Selector() {
  return (
    <>
    <h1>Select Starting Consonants</h1>
    <FormControlLabel control={<Checkbox/>} label="ㄱ (g/k)" />
    <FormControlLabel control={<Checkbox/>} label="ㄴ (n) " />
    <FormControlLabel control={<Checkbox/>} label="ㄷ (d or t)" />
    <h1> Select Vowel(모음) </h1>
    <FormControlLabel control={<Checkbox/>} label="ㅏ (a)" />
    <FormControlLabel control={<Checkbox/>} label="ㅓ (eo)" />
    <FormControlLabel control={<Checkbox/>} label="ㅗ (o)" />
    </>
  )
}

export default App;
