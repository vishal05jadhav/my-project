import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [lenght, setLenght] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setnumberAllowed] = useState(false);

  let getPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i < lenght; i++) {
      let char = [Math.floor(Math.random() * str.length + 1)];
      pass += char;
    }
    console.log(pass);
  })[(setLenght, setnumberAllowed, setCharAllowed, password)];

  setPassword(pass);

  return (
    <>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit ut voluptates ex dolorem molestiae nostrum soluta quo autem neque id repellat commodi incidunt facere minus molestias, veritatis dolores? At!</p>
    </>
  );
}

export default App;
