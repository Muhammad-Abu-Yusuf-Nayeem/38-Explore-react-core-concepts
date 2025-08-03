import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h3>Vite + React</h3>
      <Todo task="learn React" isDone={true}></Todo>
      <Todo task="learn c++" isDone={false}></Todo>
      {/* <Device name="laptop" price="55k"></Device>
      <Student grade="7" score="85"></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props) {
  return (
    <h2>
      This device:{props.name} price {props.price}
    </h2>
  );
}
function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: john {grade}</p>
      <p>Age: 32 {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  );
}
export default App;
