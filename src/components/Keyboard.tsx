import "./style/keyboard.module.css";

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
]

export function Keyboard () {
    return(
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr)",
            gap:"0.5rem",
        }}
        >
            {Keys.map(key => {
                return <button className="" key ={key}>{key}</button>
        })}

        </div>
    )
}