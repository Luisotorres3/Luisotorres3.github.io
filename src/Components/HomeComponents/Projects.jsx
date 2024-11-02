// src/components/Projects.js

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BsGithub } from "react-icons/bs";
import amadeusLogo from "../../assets/images/amadeus-logo.png"; // Imagen predeterminada o imagen de proyecto
import styles from "./styles.module.css"; // Importa el archivo de CSS Module

const ProjectCard = ({ project, languages, isMobile }) => (
  <div
    className={`p-6 flex flex-col justify-between ${
      isMobile ? styles.projectCardMobile : styles.projectCard
    }`}
  >
    <img
      src={project.image || amadeusLogo}
      alt={project.name}
      className={`${styles.projectImage} w-full h-48 object-cover rounded-md mb-4`}
    />
    <h3 className={`${styles.projectTitle} text-xl font-semibold mb-2`}>
      {project.name}
    </h3>
    <p className={`${styles.projectDescription} mb-4`}>
      {project.description || "No description available"}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {languages &&
        Object.keys(languages).map((lang) => (
          <span key={lang} className={styles.languageTag}>
            {lang}
          </span>
        ))}
    </div>
    <div className="flex justify-between mt-4">
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.projectLink} flex items-center space-x-2`}
      >
        <BsGithub size={20} />
        <span>Repositorio</span>
      </a>
    </div>
  </div>
);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [repoLanguages, setRepoLanguages] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si está en un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define 768px como el ancho límite para dispositivos móviles
    };

    handleResize(); // Verificar al cargar la página
    window.addEventListener("resize", handleResize); // Actualizar cuando se redimensione la pantalla

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Luisotorres3/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data.filter(
          (repo) => !repo.name.toLowerCase().includes("luisotorres")
        );
        setRepos(filteredRepos);

        // Obtener lenguajes para cada repositorio
        filteredRepos.forEach((repo) => {
          fetch(repo.languages_url)
            .then((response) => response.json())
            .then((languages) => {
              setRepoLanguages((prevLanguages) => ({
                ...prevLanguages,
                [repo.id]: languages,
              }));
            })
            .catch((error) =>
              console.error(
                `Error al obtener lenguajes de ${repo.name}:`,
                error
              )
            );
        });
      })
      .catch((error) => console.error("Error al obtener repositorios:", error));
  }, []);

  // Configuración de `react-slick` para dispositivos móviles
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <section id="projects" className="container mx-auto p-0 md:p-8 lg:p-8">
      <h2 className="text-4xl font-bold mb-6">Mis Proyectos</h2>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              project={repo}
              languages={repoLanguages[repo.id] || {}}
              isMobile={isMobile} // Pasa `isMobile` como prop
            />
          ))}
        </Slider>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              project={repo}
              languages={repoLanguages[repo.id] || {}}
            />
          ))}
        </div>
      )}
    </section>
  );
}
