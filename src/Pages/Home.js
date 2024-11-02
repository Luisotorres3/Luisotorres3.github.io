import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./styles/Home.module.css";

import Links from "../Components/HomeComponents/Links";
import Presentation from "../Components/HomeComponents/Presentation";
import Studies from "../Components/HomeComponents/Studies";
import Experience from "../Components/HomeComponents/Experience";
import Contact from "../Components/HomeComponents/Contact";
import Projects from "../Components/HomeComponents/Projects";

export default function Home({ isDarkMode }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <LinksLeft />
      <Presentation />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Studies />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Experience />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Projects isDarkMode={isDarkMode} />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function LinksLeft() {
  return (
    <div className={`${styles.sideElement} hidden md:block lg:block`}>
      <Links />
    </div>
  );
}

function ScrollToTopButton() {
  useEffect(() => {
    // Obtener el botón por su ID
    const mybutton = document.getElementById("myBtn");

    // Mostrar el botón cuando el usuario hace scroll
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    // Añadir el evento de scroll
    window.addEventListener("scroll", scrollFunction);

    // Limpiar el evento de scroll al desmontar el componente
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  // Función para volver al tope de la página con un desplazamiento suave
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace que el desplazamiento sea suave
    });
  };

  return (
    <button
      onClick={topFunction}
      id="myBtn"
      style={{ display: "none" }} // Inicialmente oculto
      className="fixed bottom-10 right-10 bg-[color:--primary-color] text-white p-4 rounded-full shadow-lg hover:bg-[color:--hover-color] transition duration-300 ease-in-out"
    >
      <FaArrowUp size={20} />
    </button>
  );
}

function Footer() {
  return (
    <footer className="m-4 ">
      <div className="container mx-auto px-4">
        {/* Contenedor de la parte superior del footer */}
        <div
          className={`${styles.sideElement} ${styles.linksHorizontal} flex flex-col md:hidden lg:hidden md:flex-row md:justify-between items-center py-6`}
        >
          {/* Redes sociales */}
          <Links />
        </div>

        {/* Línea divisoria */}
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 md:hidden lg:hidden" />

        {/* Créditos de copyright */}
        <div className="text-center text-sm pb-4">
          &copy; 2024 Luis Soto Torres. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
