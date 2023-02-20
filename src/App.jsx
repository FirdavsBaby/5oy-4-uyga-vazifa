import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import AboutCompany from "./pages/AboutCompany";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<AboutCompany />} />
      </Routes>
    </div>
  );
}

export default App
