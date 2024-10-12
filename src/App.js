import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/Navbar";
import AnimatedName3D from "./Components/Animations/AnimatedName3D";
import "./App.css"; // Importa estilos si es necesario
// Importa los estilos de slick-carousel en tu App.js o index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function RutasApp({ isDarkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

function App() {
  const location = useLocation(); // Obtener la ruta actual
  const [showAnimation, setShowAnimation] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);

  // Verificar si la animación debe mostrarse
  useEffect(() => {
    const animationShown = sessionStorage.getItem("animationShown");
    if (animationShown !== "true" && location.pathname === "/") {
      setShowAnimation(true);
    }
  }, [location.pathname]);

  // Función para manejar el clic en el botón "Entrar"
  const handleEnter = () => {
    setShowAnimation(false);
    sessionStorage.setItem("animationShown", "true");
  };

  return (
    <div className="App">
      {showAnimation ? (
        <AnimatedName3D handleEnter={handleEnter} />
      ) : (
        // Contenido principal de la web
        <>
          <NavbarComponent
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          {/* Resto del contenido */}
          <RutasApp isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
}

export default App;
