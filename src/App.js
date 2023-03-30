import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import DarkLight from "./components/DarkLight";
import { useEffect, useState } from "react";

function App() {

  const [ color, setColor ] = useState("white")

  const click = (color) => {
   setColor(color);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  },[color]);

  return (
    <>
    <div>
      <button onClick={() => {click("skyblue")}} >Switch Color</button>
    </div>
      <Form />
      <DarkLight />
    </>
  );
}

export default App;
