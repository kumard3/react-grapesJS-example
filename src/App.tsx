import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";
import { Link } from "react-router-dom";
// import { MJML } from "./pages/Mjml";
import { Newsletter } from "./pages/NewLetter";
import Test from "./pages/test";
import MJML from "./pages/Mjml";

export const Homepage = () => {
  return <h1>hello </h1>;
};

function App() {
  return (
    <div className="">
      <div className="text-white p-20 max-w-sm flex justify-around">
        <Link to="/">Home</Link>
        <Link to="news-letter">news-letter</Link>
        <Link to="mjml">mjml</Link>
        <Link to="Test">Test</Link>
      </div>
      <Routes>
        <Route>
          <Route path="/" element={<Editor />} />
          <Route path="mjml" element={<MJML />} />
          <Route path="news-letter" element={<Newsletter />} />
          <Route path="Test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
