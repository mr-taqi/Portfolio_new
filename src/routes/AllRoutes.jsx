import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Connect from "../pages/Connect";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="#home-section" element={<Home />} />
        <Route path="#projects-section" element={<Projects />} />
        <Route path="#experience-section" element={<Experience />} />
        <Route path="#about-section" element={<About />} />
        <Route path="#skills-section" element={<Skills />} />
        <Route path="#contact-section" element={<Connect />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
