import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Carrusel de react-slick
import { FaArrowUp } from "react-icons/fa";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Presentation />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <ExperienceAndStudies />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Projects />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <ScrollToTopButton />
    </div>
  );
}

function Presentation() {
  return (
    <section
      id="first_section"
      className="flex flex-col md:flex-row items-center justify-between px-20"
      style={{
        //backgroundImage: `url(${require("../assets/images/background_presentation.avif")})`,
        backgroundSize: "cover", // Ajustar el fondo para que cubra la sección
        backgroundPosition: "center", // Centrar la imagen de fondo
        // Hacer que la sección ocupe el 50% de la altura de la pantalla
      }}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          src={require("../assets/images/foto2.png")}
          alt="Profile"
          className="rounded-lg max-w-full md:w-full mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 0.6 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${require("../assets/images/background_cork.avif")})`,
          }}
        />
      </div>
      <div className="w-2/4 mt-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center">
          Hi! I am Luis Soto Torres
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Computer Engineer working as Software Developer in AMADEUS
        </p>

        <div className="mt-6 flex gap-4">
          <button
            className="bg-rose-800 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() =>
              document
                .getElementById("experience-studies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience & Studies
          </button>
          <button
            className="bg-white text-rose-800 px-4 py-2 rounded-lg shadow-md"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <button
            className="bg-rose-800 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() =>
              document
                .getElementById("studies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Studies
          </button>
        </div>

        <div className="mt-10 flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luisotorres3/"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md"
          >
            <FaLinkedin className="text-blue-600 text-2xl" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/Luisotorres3"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md"
          >
            <FaGithub className="text-black text-2xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:luis.soto.torres3@gmail.com"
            className="bg-white p-2 rounded-full shadow-md"
          >
            <FaEnvelope className="text-red-500 text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

const experiencias = [
  {
    puesto: "Software Developer",
    empresa: "NTT Data",
    ubicacion: "Granada, Spain",
    fechas: "March 2023 - September 2023",
    descripcion: `
        At NTT Data, I worked on enterprise-level applications focusing on C++ development, 
        code optimization, and system performance improvements.`,
    logo: require("../assets/images/ntt-logo.png"), // Ajusta la ruta de los logos
  },
  {
    puesto: "Software Developer",
    empresa: "ALTEN",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
        Working at ALTEN for AMADEUS, focusing on C++ development for key components 
        of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../assets/images/alten-logo.png"), // Ajusta la ruta de los logos
  },
  {
    puesto: "Software Developer (C++)",
    empresa: "AMADEUS",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
        Working at AMADEUS, focusing on C++ development for key components 
        of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../assets/images/amadeus-logo.png"), // Ajusta la ruta de los logos
  },
];

const estudios = [
  {
    titulo: "Degree in Computer Science",
    institucion: "University of Granada",
    anio: "2018 - 2024",
    descripcion: `
          During my degree in Computer Science, I specialized in Information Technology and gained in-depth knowledge in 
          data structures, algorithms, software development methodologies, and system architecture. I worked on multiple 
          projects, including web development, cloud computing, and database management, using technologies like Java, 
          Python, and SQL. `,
  },
  {
    titulo: "Erasmus+ in Computer Science",
    institucion: "University of Jyväskylä",
    anio: "2021 - 2022",
    descripcion: `
          As part of the Erasmus+ exchange program, I expanded my knowledge in cutting-edge technologies, focusing on web 
          development and cloud-based applications. I mastered languages like HTML, CSS, JavaScript, and React, and gained 
          practical experience with Node.js and REST APIs. I collaborated with international students on innovative projects 
          that helped me improve my problem-solving skills.`,
  },
];

function ExperienceAndStudies() {
  return (
    <section
      id="experience-studies"
      className="relative w-full flex flex-col items-center justify-center py-16"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Experience & Studies
      </h2>

      <div className="text-start flex flex-col md:flex-row justify-between w-full max-w-7xl">
        {/* Estudios (a la izquierda en pantallas grandes) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          <h3 className="text-center text-3xl font-semibold mb-6">
            My Studies
          </h3>
          {estudios.map((estudio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-rose-800 mb-2">
                {estudio.titulo}
              </h3>
              <p className="text-lg text-gray-600 font-semibold">
                {estudio.institucion}
              </p>
              <p className="text-sm text-gray-500 mb-4">{estudio.anio}</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {estudio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Experiencia (a la derecha en pantallas grandes) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          <h3 className="text-center text-3xl font-semibold mb-6">
            Working Experience
          </h3>
          {experiencias.map((experiencia, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Logo de la empresa */}
              <div className="w-20 h-20">
                <img
                  src={experiencia.logo}
                  alt={experiencia.empresa}
                  className="w-full h-full"
                />
              </div>

              {/* Detalles de la experiencia */}
              <div className="text-start">
                <h3 className="text-lg font-semibold text-black">
                  {experiencia.puesto}
                </h3>
                <h3 className="font-semibold text-black">
                  {experiencia.empresa}
                </h3>
                <p className="text-sm text-black">{experiencia.fechas}</p>
                <p className="text-sm text-black mt-2">
                  {experiencia.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [repos, setRepos] = useState([]);
  const [hoveredRepo, setHoveredRepo] = useState(null); // Estado para almacenar el repo en hover

  // Obtener los repositorios de GitHub
  useEffect(() => {
    fetch("https://api.github.com/users/Luisotorres3/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  // Configuración del carrusel de react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar un solo ítem a la vez
    slidesToScroll: 1, // Desplazar de a un ítem a la vez
    customPaging: (i) => (
      <div className={styles.customDot}></div> // Clase personalizada para los puntos
    ),
    responsive: [
      {
        breakpoint: 1024, // En pantallas grandes
        settings: {
          slidesToShow: 3, // Mostrar 3 ítems a la vez
          slidesToScroll: 1, // Desplazar un ítem a la vez
        },
      },
      {
        breakpoint: 600, // En pantallas medianas
        settings: {
          slidesToShow: 2, // Mostrar 2 ítems a la vez
          slidesToScroll: 1, // Desplazar un ítem a la vez
        },
      },
      {
        breakpoint: 480, // En pantallas pequeñas
        settings: {
          slidesToShow: 1, // Mostrar 1 ítem a la vez
          slidesToScroll: 1, // Desplazar un ítem a la vez
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative w-full flex flex-col items-center justify-center"
      style={{
        //backgroundImage: `url(${require("../assets/images/background_projects.avif")})`,
        backgroundSize: "cover", // Ajustar el fondo para que cubra la sección
        backgroundPosition: "center", // Centrar la imagen de fondo
        minHeight: `calc(100vh)`,
        // Hacer que la sección ocupe el 50% de la altura de la pantalla
      }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="w-full">
        {" "}
        {/* Contenedor del carrusel, con un máximo de ancho */}
        {repos.length > 0 ? (
          <Slider {...settings}>
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-4 relative w-full" // Contenedor relativo para que el popup esté posicionado correctamente
                onMouseEnter={() => setHoveredRepo(repo.name)}
                onMouseLeave={() => setHoveredRepo(null)}
              >
                <div className="bg-red-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                  <p className="text-neutral-300 mb-4">
                    {repo.description
                      ? repo.description
                      : "No description available"}
                  </p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center">Cargando proyectos...</p>
        )}
      </div>
    </section>
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
      className="fixed bottom-10 right-10 bg-rose-600 text-white p-4 rounded-full shadow-lg hover:bg-rose-700 transition duration-300 ease-in-out"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
