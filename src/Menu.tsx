import { Routes, Route, useParams } from "react-router-dom";
import Hello from "./components/Hello";
import Form from "./components/Form";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello didi="sdsqsd" />}></Route>
      <Route path="/formulaire" element={<Form />}></Route>
    </Routes>
  );
};
export default Main;
