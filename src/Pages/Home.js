import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaBook,
  FaTasks,
  FaFileDownload,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Carrusel de react-slick
import { FaArrowUp } from "react-icons/fa";
import styles from "./styles/Home.module.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import BilliardBalls from "../Components/BilliardBall/BilliardBalls";

export default function Home({ isDarkMode }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Presentation />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <ExperienceAndStudies />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Projects isDarkMode={isDarkMode} />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function Presentation() {
  return (
    <section
      id="first_section"
      className="flex flex-col md:flex-row justify-start sm:justify-center md:justify-center px-4 sm:px-8 md:px-0 h-100 md:h-screen items-start"
      style={{
        //backgroundImage: `url(${require("../assets/images/background_presentation.avif")})`,
        backgroundSize: "cover", // Ajustar el fondo para que cubra la sección
        backgroundPosition: "center", // Centrar la imagen de fondo
        // Hacer que la sección ocupe el 50% de la altura de la pantalla
      }}
    >
      {/*<div className="w-full md:w-1/2 flex justify-center">
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
      </div>*/}
      <div className="w-full md:w-3/5 mt-0 md:mt-8 flex flex-col items-center text-start">
        <div className="w-full md:w-1/2 mt-8 flex flex-col items-center text-start">
          <h1 className="w-full text-5xl font-bold text-start">
            Hey there, I'm <span className={styles.gradientText}>Luis</span>!
          </h1>
          <p className={styles.textGradient}>
            Computer Science Engineer | Software Developer
          </p>
          <p className="w-full mt-4 text-start">
            A developer from Spain. Currently based in Nice working as a
            Software Developer (C++). I'm interested in everything related with
            technologies and I'm currently investigating, discovering and
            studying new ones.
          </p>

          <div className="w-full mt-6 flex flex-col md:flex-row justify-between gap-4">
            <button
              className="w-full md:w-auto text-white px-4 py-2 rounded-lg shadow-md text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() =>
                document
                  .getElementById("experience-studies")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex items-center justify-start space-x-2">
                <FaBook />
                <p>Experience & Studies</p>
              </div>
            </button>
            <button
              className="w-full md:w-auto text-white px-4 py-2 rounded-lg shadow-md text-white bg-gradient-to-bl from-pink-500 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex items-center justify-end space-x-2">
                <p>Projects</p>
                <FaTasks />
              </div>
            </button>
            <button
              className="w-full md:w-auto text-white px-4 py-2 rounded-lg shadow-md text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${process.env.PUBLIC_URL}/Luis_Soto_Torres_CV.pdf`;
                link.download = "Luis_Soto_Torres_CV.pdf";
                link.click();
              }}
            >
              <div className="flex items-center justify-start space-x-2">
                <FaFileDownload />
                <p>Download CV</p>
              </div>
            </button>
          </div>
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
        <BilliardBalls />
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
    logo: require("../assets/images/ntt-logo.png"),
  },
  {
    puesto: "Software Developer",
    empresa: "ALTEN",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
        Working at ALTEN for AMADEUS, focusing on C++ development for key components 
        of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../assets/images/alten-logo.png"),
  },
  {
    puesto: "Software Developer (C++)",
    empresa: "AMADEUS",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
        Working at AMADEUS, focusing on C++ development for key components 
        of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../assets/images/amadeus-logo.png"),
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
    logo: require("../assets/images/ugr-logo.png"),
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
    logo: require("../assets/images/jyv-logo.png"),
  },
];

const BookCard = ({ item, tipo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`book-card ${isOpen ? "open" : ""}`}
      onClick={toggleOpen}
      style={{
        cursor: "pointer",
        padding: "20px",
        margin: "10px 0",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.4s ease-in-out",
      }}
    >
      {!isOpen ? (
        <div className="card-content flex flex-row items-center">
          <img
            src={item.logo}
            alt={item.institucion || item.empresa}
            className="w-16 h-16 mr-4"
            style={{ borderRadius: "50%" }}
          />
          <div>
            <h3 className="text-xl font-semibold">
              {tipo === "estudio" ? item.institucion : item.empresa}
            </h3>
            <p className="text-sm">
              {tipo === "estudio" ? item.anio : item.fechas}
            </p>
          </div>
        </div>
      ) : (
        <div className="card-opened-content p-4">
          <h3 className="text-xl font-bold">
            {tipo === "estudio" ? item.titulo : item.puesto}
          </h3>
          <p className="text-md font-semibold">
            {tipo === "estudio" ? item.institucion : item.empresa}
          </p>
          <p className="text-sm mt-2">{item.descripcion}</p>
          <button
            className="mt-4 text-blue-600 hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

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
        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          <h3 className="text-center text-3xl font-semibold mb-6">
            My Studies
          </h3>
          {estudios.map((estudio, index) => (
            <BookCard key={index} item={estudio} tipo="estudio" />
          ))}
        </div>

        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          <h3 className="text-center text-3xl font-semibold mb-6">
            Working Experience
          </h3>
          {experiencias.map((experiencia, index) => (
            <BookCard key={index} item={experiencia} tipo="experiencia" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ isDarkMode }) {
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
    slidesToShow: 3, // Mostrar un solo ítem a la vez
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
      className="relative w-full flex flex-col items-center justify-center py-16"
      style={{
        minHeight: `calc(100vh)`,
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
                className="flex justify-center items-center p-4"
                style={{
                  height: "100%",
                }}
              >
                {/* Ajusta el tamaño de la tarjeta para ser uniforme */}
                <Card
                  isHoverable
                  isPressable
                  className="projectsCard w-full h-full flex flex-col justify-between items-center"
                  style={{
                    height: "100%",
                    minHeight: "400px",
                    backgroundImage: isDarkMode
                      ? `url(${require("../assets/images/backgroundProjects_dark.avif")})` // Imagen para Dark Mode
                      : `url(${require("../assets/images/backgroundProjects.avif")})`, // Imagen para Light Mode
                  }}
                >
                  <CardHeader className="text-rose-800 w-full text-center">
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.4rem",
                      }}
                    >
                      {repo.name}
                    </h3>
                  </CardHeader>
                  {/* Imagen del proyecto */}
                  <Image
                    src={require("../assets/images/amadeus-logo.png")}
                    width="100%"
                    height={200}
                    alt={repo.name}
                  />
                  <CardBody className="w-full text-center">
                    <p style={{ color: "gray" }}>
                      {repo.description || "No description available"}
                    </p>
                  </CardBody>
                  <CardFooter className="w-full flex justify-center">
                    <Button
                      className="bg-rose-800"
                      shadow
                      auto
                      as="a"
                      href={repo.html_url}
                      target="_blank"
                    >
                      Ver Proyecto
                    </Button>
                  </CardFooter>
                </Card>
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

function Footer() {
  return (
    <footer className="bg-rose-800/70 rounded-lg shadow dark:bg-rose-800/50 m-4">
      <div className="container mx-auto px-4">
        {/* Contenedor de la parte superior del footer */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-6">
          {/* Sección de marca */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold dark:text-white">
              Luis Soto Torres
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Computer Engineer & Software Developer
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Luisotorres3"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/luisotorres3/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:luis.soto.torres3@gmail.com"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://wa.me/34660378351" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="tel:+34660378351" // Reemplaza con tu número de teléfono
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <FaPhone size={20} />
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        {/* Créditos de copyright */}
        <div className="text-center text-gray-500 text-sm dark:text-gray-400 pb-4">
          &copy; 2024 Luis Soto Torres. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function LinkedInHoverBadge() {
  const [showBadge, setShowBadge] = useState(false);

  // Función para cargar el script de LinkedIn
  useEffect(() => {
    if (showBadge) {
      // Añadir el script de LinkedIn cuando se muestra el badge
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Limpiar el script cuando el componente se desmonte
        document.body.removeChild(script);
      };
    }
  }, [showBadge]);

  return (
    <div className="relative group">
      {/* Ícono de LinkedIn */}
      <a
        href="https://www.linkedin.com/in/luisotorres3/"
        target="_blank"
        rel="noreferrer"
        className="bg-white p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setShowBadge(true)}
        onMouseLeave={() => setShowBadge(false)}
      >
        <FaLinkedin className="text-blue-600 text-3xl" />
      </a>

      {/* LinkedIn Badge: Aparece al hacer hover */}
      {showBadge && (
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out z-50">
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="luisotorres3"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/luisotorres3/?trk=profile-badge"
            >
              Luis Soto Torres
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
