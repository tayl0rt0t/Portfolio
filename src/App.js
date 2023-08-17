import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <div className='absolute bottom-0 right-0'>
      <SocialIcon url="https://linkedin.com/in/taylor-treadwell" />
      </div>
    </div>
  );
}

export default App;
