import { useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
   
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setQuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )


  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        
      }}
    >
      <div style={{fontSize:"2rem",textAlign:"center"}}>Lose Win </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{ alignSelf:"stretch"}}>
      <Keyboard/>
      </div>
     
    </div>
  );
}

export default App;
