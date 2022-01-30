import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";

export const Homepage = () => {
  return <h1>hello </h1>;
};

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Editor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
