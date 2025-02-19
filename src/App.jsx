// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-blue-500 p-3 rounded-md text-white m-2">
        props with tailwind
      </h1>{" "}
      <Card username="Philip"/>
      <Card username="Olatunde" post="Jr Dev"/>
      <Card />
    </>
  );
}

export default App;
