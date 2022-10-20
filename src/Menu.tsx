import { Routes, Route, useParams } from "react-router-dom";
import Hello from "./components/Hello";
const Main = () => {
  function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Hello didi="sdsqsd" />}>
        <BlogPost />
      </Route>
    </Routes>
  );
};
export default Main;
