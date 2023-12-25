import React, { useState } from "react";
import "./App.css";
import * as hangul from "hangul-js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

function App() {
  let x = hangul.disassemble("가나다"); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']
  let y = hangul.assemble(["ㄱ", "ㅏ", "ㅋ"]);
  console.log(y);
  return (
    <div className="App">
      <Selector />
    </div>
  );
}

function Selector() {
  const [startingConsonants, setStartingConsonants] = useState<string[]>([]);
  const [vowels, setVowels] = useState<string[]>([]);
  const [endingConsonants, setEndingConsonants] = useState<string[]>([]);
  const [word, setWord] = useState<string>();

  const handleStartingConsonant = (
    startingConsonant: string,
    isChecked: boolean
  ) => {
    if (isChecked === true) {
      const add = startingConsonants.map((x) => x);
      add.push(startingConsonant);
      setStartingConsonants(add);
    } else {
      const remove = startingConsonants.filter((x) => x !== startingConsonant);
      setStartingConsonants(remove);
    }
  };
  const handleVowel = (vowel: string, isChecked: boolean) => {
    if (isChecked === true) {
      const add = vowels.map((x) => x);
      add.push(vowel);
      setVowels(add);
    } else {
      const remove = vowels.filter((x) => x !== vowel);
      setVowels(remove);
    }
  };
  const handleEndingConsonant = (
    endingConsonant: string,
    isChecked: boolean
  ) => {
    if (isChecked === true) {
      const add = endingConsonants.map((x) => x);
      add.push(endingConsonant);
      setEndingConsonants(add);
    } else {
      const remove = endingConsonants.filter((x) => x !== endingConsonant);
      setEndingConsonants(remove);
    }
  };
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const handleCreate = () => {
    const start = startingConsonants[getRandomInt(startingConsonants.length)];
    const vowel = vowels[getRandomInt(vowels.length)];
    const end = endingConsonants[getRandomInt(endingConsonants.length)];
    const combined = hangul.assemble([start, vowel, end]);
    setWord(combined);
  };
  return (
    <>
      <h1>Select Starting Consonants(자음) </h1>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleStartingConsonant("ㄱ", event.target.checked)
            }
          />
        }
        label="ㄱ (g/k)"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleStartingConsonant("ㄴ", event.target.checked)
            }
          />
        }
        label="ㄴ (n) "
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleStartingConsonant("ㄷ", event.target.checked)
            }
          />
        }
        label="ㄷ (d or t)"
      />
      <h1> Select Vowel(모음) </h1>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => handleVowel("ㅏ", event.target.checked)}
          />
        }
        label="ㅏ (a)"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => handleVowel("ㅓ", event.target.checked)}
          />
        }
        label="ㅓ (eo)"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => handleVowel("ㅗ", event.target.checked)}
          />
        }
        label="ㅗ (o)"
      />
      <h1> Select Ending Consonants(자음)</h1>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleEndingConsonant("ㅋ", event.target.checked)
            }
          />
        }
        label="ㅋ (k)"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleEndingConsonant("ㅈ", event.target.checked)
            }
          />
        }
        label="ㅈ (j/ch)"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) =>
              handleEndingConsonant("ㅌ", event.target.checked)
            }
          />
        }
        label="ㅌ (t)"
      />
      <br />
      <Button variant="contained" onClick={handleCreate}>
        Create Word
      </Button>
      <h1>
      {word}
      </h1>
    </>
  );
}

export default App;
