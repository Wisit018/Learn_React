import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Path Url --> /about , /blogs , /home
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/info" element={<Navigate to="/about" />} />
        <Route path="/blog/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
