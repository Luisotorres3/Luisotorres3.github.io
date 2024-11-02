import BookCard from "./BookCard";

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
    logo: require("../../assets/images/ugr-logo.png"),
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
    logo: require("../../assets/images/jyv-logo.png"),
  },
];

export default function Studies() {
  return (
    <section
      id="studies"
      className="relative w-full flex flex-col items-center justify-center py-0.5 md:py-16 lg:py-16 min-h-full md:min-h-screen lg:min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Studies</h2>

      <div className="text-start flex flex-col md:flex-row justify-center w-full max-w-7xl">
        <div className="w-full md:w-1/2 flex flex-col space-y-8 p-4">
          {estudios.map((estudio, index) => (
            <BookCard key={index} item={estudio} tipo="estudio" />
          ))}
        </div>
      </div>
    </section>
  );
}
