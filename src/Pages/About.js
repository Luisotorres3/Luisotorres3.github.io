import React from "react";
import PlanetSystem from "../Components/Satellite/Satellite";

const About = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      {/* Ejemplo de un sistema planetario con 4 satélites */}
      <PlanetSystem
        planetName="JavaScript"
        satellites={["React", "Node.js", "Angular", "Vue.js"]}
      />
    </div>
  );
};

export default About;
