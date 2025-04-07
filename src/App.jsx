import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Smartboard</h1>
        <Home />
      </div>
    </>
  );
}

export default App;
