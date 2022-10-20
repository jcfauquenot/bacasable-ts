import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PopList from "./components/PopList";
import Menu from "./Menu";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/formulaire">formulaire</Link>
          </li>
        </ul>
      </div>
      <Menu />
    </div>
  );
};

export default App;
