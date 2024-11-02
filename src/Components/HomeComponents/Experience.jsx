import BookCard from "./BookCard";

const experiencias = [
  {
    puesto: "Software Developer",
    empresa: "NTT Data",
    ubicacion: "Granada, Spain",
    fechas: "March 2023 - September 2023",
    descripcion: `
          At NTT Data, I worked on enterprise-level applications focusing on C++ development, 
          code optimization, and system performance improvements.`,
    logo: require("../../assets/images/ntt-logo.png"),
  },
  {
    puesto: "Software Developer",
    empresa: "ALTEN",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
          Working at ALTEN for AMADEUS, focusing on C++ development for key components 
          of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../../assets/images/alten-logo.png"),
  },
  {
    puesto: "Software Developer (C++)",
    empresa: "AMADEUS",
    ubicacion: "Nice, France",
    fechas: "September 2023 - Present",
    descripcion: `
          Working at AMADEUS, focusing on C++ development for key components 
          of the AMADEUS platform, with a focus on performance and system reliability.`,
    logo: require("../../assets/images/amadeus-logo.png"),
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full flex flex-col items-center justify-center py-0.5 md:py-16 lg:py-16 min-h-full md:min-h-screen lg:min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

      <div className="text-start flex flex-col md:flex-row justify-center w-full max-w-7xl">
        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          {experiencias.map((experiencia, index) => (
            <BookCard key={index} item={experiencia} tipo="experiencia" />
          ))}
        </div>
      </div>
    </section>
  );
}
