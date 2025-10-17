import { useState, useEffect } from "react";
import "./App.css";
import { CustomCursor } from "./components/CustomCursor";
import { MainHeader } from "./components/MainHeader";
// import AllRoutes from "./routes/AllRoutes";
import { Loading } from "./ShimmerUi/Loading";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import About from "./pages/About";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";
import { ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(
            () => resolve({ success: true, data: "Sample data" }),
            2000
          )
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <CustomCursor />
      <MainHeader />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Connect />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
