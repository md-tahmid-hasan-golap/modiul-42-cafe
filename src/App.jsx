import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <navbar></navbar>
    </>
  );
}

export default App;
