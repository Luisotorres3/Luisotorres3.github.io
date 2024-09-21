import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import { LSLogo } from "./Logo";
import styles from "./Navbar.module.css";

export default function NavbarComponent() {
  const location = useLocation();

  // Estado para rastrear si el tema oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  // Establecer la página activa basada en la ruta actual
  const activePage = routeToPage[pathname] || "home";

  return (
    <Navbar shouldHideOnScroll isBlurred={false} className={styles.navbar}>
      <NavbarContent className="sm:flex gap-4" justify="left">
        <NavbarBrand className={styles.logo}>
          <Link to="/" className={styles["unstyled-link"]}>
            <LSLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            to="/about"
            className={`${styles["unstyled-link"]} ${
              activePage === "about"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "about" ? "page" : undefined}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/projects"
            className={`${styles["unstyled-link"]} ${
              activePage === "projects"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "projects" ? "page" : undefined}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/contact"
            className={`${styles["unstyled-link"]} ${
              activePage === "contact"
                ? styles["active-link"]
                : styles["inactive-link"]
            }`}
            aria-current={activePage === "contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchCheckDefault"
        >
          {isDarkMode ? "☾ Dark" : "☀ Light"}
        </label>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </NavbarItem>
    </Navbar>
  );
}
