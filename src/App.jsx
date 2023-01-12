import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <MainCard />
    </div>
  );
}

export default App;
