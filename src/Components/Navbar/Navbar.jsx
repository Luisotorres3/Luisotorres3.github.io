import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { LSLogo } from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos para el menú de hamburguesa
import styles from "./Navbar.module.css";

export default function NavbarComponent({ isDarkMode, setIsDarkMode }) {
  const location = useLocation();

  // Estado para rastrear si el tema oscuro está activado
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil

  // Efecto para cambiar la clase del body cuando cambie el tema
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Obtener la ruta actual y eliminar el prefijo "#"
  const pathname = location.pathname.startsWith("/#")
    ? location.pathname.slice(2)
    : location.pathname;

  // Mapeo de rutas a nombres de páginas
  const routeToPage = {
    "/": "home",
    "/about": "about",
    "/projects": "projects",
    "/contact": "contact",
  };

  const menuItems = ["About", "Studies", "Experience", "Projects", "Contact"];

  // Establecer la página activa basada en la ruta actual
  const activePage = routeToPage[pathname] || "/";

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar shouldHideOnScroll isBlurred={false} className={styles.navbar}>
      <NavbarContent className="sm:flex gap-4" justify="left">
        <NavbarBrand className={styles.logo}>
          <Link
            to="/"
            className={styles["unstyled-link"]}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <LSLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Botón de Menú Móvil */}
      <NavbarItem className="md:hidden">
        <Button auto flat onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </NavbarItem>

      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem>
          <Link
            className={`${styles["unstyled-link"]} ${
              activePage === "about"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "about" ? "page" : undefined}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${styles["unstyled-link"]} ${
              activePage === "about"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "about" ? "page" : undefined}
            onClick={() =>
              document
                .getElementById("studies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Studies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${styles["unstyled-link"]} ${
              activePage === "projects"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "projects" ? "page" : undefined}
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${styles["unstyled-link"]} ${
              activePage === "projects"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "projects" ? "page" : undefined}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${styles["unstyled-link"]} ${
              activePage === "contact"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "contact" ? "page" : undefined}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Toggle del Tema */}
      <NavbarItem className="md:flex">
        <div className="relative flex items-center">
          {/* Toggle Switch */}
          <input
            type="checkbox"
            id="themeToggle"
            role="switch"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          {/* Toggle Container */}
          <label
            htmlFor="themeToggle"
            className="w-14 h-8 bg-gray-300 rounded-full flex items-center cursor-pointer relative peer-checked:bg-gray-700 transition-colors duration-300"
          >
            {/* Toggle Knob */}
            <span
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex justify-center items-center ${
                isDarkMode ? "translate-x-7" : "translate-x-1"
              }`}
            >
              {/* Ícono dentro del Knob que cambia */}
              {isDarkMode ? (
                <span className="text-blue-400">🌙</span>
              ) : (
                <span className="text-yellow-400">☀️</span>
              )}
            </span>
          </label>
        </div>
      </NavbarItem>
      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <div className="fixed pt-16 top-24 left-0 w-full h-screen bg-black bg-opacity-100 text-white z-50 flex flex-col items-center md:hidden">
          <nav className="flex flex-col gap-8">
            {menuItems.map((item, index) =>
              item.toLowerCase() !== "home" ? (
                <Link
                  key={index}
                  className={`${styles["unstyled-link"]} text-2xl`}
                  onClick={(e) => {
                    e.preventDefault(); // Evitar el comportamiento predeterminado
                    document
                      .getElementById(`${item.toLowerCase()}`)
                      .scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false); // Cerrar el menú
                  }}
                >
                  {item}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={`/`}
                  className={`${styles["unstyled-link"]} text-2xl`}
                  onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </Navbar>
  );
}
