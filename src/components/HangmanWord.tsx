export function HangmanWord() {
const guessedLetters = ["t","e","g","t"]
  const word = "test";
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1em solid black" }} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter)
          ? "visible"
          : "hidden",
        
        }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
