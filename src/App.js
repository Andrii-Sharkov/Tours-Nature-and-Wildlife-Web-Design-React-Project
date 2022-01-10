import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Deals from "./components/Deals/Deals";
import Experience from "./components/Experience/Experience";
import Explore from "./components/Explore/Explore";
import Holidays from "./components/Holidays/Holidays";
import Sighup from "./components/Sighup/Sighup";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/sighup" element={<Sighup />} />
      </Routes>
      <Footer />
      {/* <Home />
      <About />
      <Deals />
      <Experience />
      <Explore />
      <Holidays />
      <Sighup />
      <Footer /> */}
    </div>
  );
}

export default App;
