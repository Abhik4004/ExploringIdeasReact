import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages";
import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/web-dev-projects"
            element={<div>Web Development Projects</div>}
          />
          <Route
            path="/aiml-projects"
            element={<div>AI/ML, IoT, Cloud Projects</div>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
