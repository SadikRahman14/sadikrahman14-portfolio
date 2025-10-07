import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import "./index.css";
import NavBar from './components/NavBar'
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isLoaded, setIsloaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsloaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-90" : "opacity-0"} bg-black text-gray-700`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
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
  )
}

export default App
