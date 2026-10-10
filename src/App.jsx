import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import LatestProject from "./components/sections/LatestProject";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className="min-h-screen bg-black text-gray-100"
        inert={!isLoaded}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <LatestProject />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          draggable={false}
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
