import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rubel"];
  const singers = [
    { name: "Dr. Mahfujur Rahman", age: 68 },
    { name: "Eva Rahman", age: 38 },
    { name: "Shuvro dev", age: 58 },
    { name: "Pritom", age: 28 },
  ];
  return (
    <>
      <h3>Vite + React</h3>
      {
        singers.map(singer =><Singer singer={singer}></Singer>)
      }


      <Actor name="Bappa Raz"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo task="learn c++" isDone={false}></Todo> */}
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
