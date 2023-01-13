import styles from "./style/Keyboard.module.css";

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
        gap: "0.5rem",
      }}
    >
      {Keys.map((key) => {
        return (
          <button 
          disabled
          className={`${styles.btn} ${styles.inactive}`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
