import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=> {
    return words[Math.floor(Math.random() * words.length)]
  });
  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
