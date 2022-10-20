import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Hello didi="doremi" />
      <h2>count : {count} </h2>
      <Button count={count} update={setCount} />
      <Navbar />
      <div className="main">
        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
          <button className="button is-info">Info</button>
          <button className="button is-success">Success</button>
          <button className="button is-warning">Warning</button>
          <button className="button is-danger">Danger</button>
          <button className="button is-black">Black</button>
          <button className="button is-white">White</button>
          <button className="button is-dark">Dark</button>
          <button className="button is-light">Light</button>
        </div>
      </div>
    </div>
  );
};

export default App;
