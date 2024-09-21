import React from "react";
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
    <Navbar shouldHideOnScroll className={styles.navbar}>
      <NavbarContent className="hidden sm:flex gap-4" justify="left">
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
    </Navbar>
  );
}
