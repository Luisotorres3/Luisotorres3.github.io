import React, { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture, Decal } from "@react-three/drei";
import styles from "./BilliardBalls.module.css";
import { TextureLoader } from "three";

// URL de la textura de fondo para las bolas
const backgroundTexture = require("../../assets/images/texture_ball.jpg");

// Datos de las tecnologías y sus logos
const technologies = [
  {
    name: "JavaScript",
    color: "#F0DB4F",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  },
  {
    name: "React",
    color: "#61DAFB",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  },
  {
    name: "Python",
    color: "#306998",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
  },
  {
    name: "C++",
    color: "#00599C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Java",
    color: "#f89820",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png",
  },
  {
    name: "HTML5",
    color: "#E34F26",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
  },
  {
    name: "CSS3",
    color: "#1572B6",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
  },
  {
    name: "Node.js",
    color: "#339933",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
  },
];

// Componente individual de bola 3D con logo centrado
function BilliardBall({ position, logo, color, lightPosition }) {
  const texture = useLoader(TextureLoader, logo);
  const base = useLoader(TextureLoader, backgroundTexture); // Textura de la bola
  const mesh = useRef();

  // Movimiento de rotación controlada en la bola
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Bola 3D con sombras */}
      <mesh ref={mesh} position={position} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          map={base} // Textura base de la bola (color uniforme)
          roughness={1} // Superficie muy suave y brillante
          envMapIntensity={1} // Intensidad del entorno
          clearcoat={1} // Añade un acabado brillante en la superficie
          clearcoatRoughness={0.5} // Mantener el clearcoat suave
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={texture}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={texture}
        />
      </mesh>

      {/* Plano debajo de la bola para ver la sombra */}
      <mesh
        position={[position[0], position[1] - 1.2, position[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[3, 3]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Contenedor de las bolas con efecto de foco de luz dinámico
export default function BilliardBalls() {
  // Estado para la posición del foco de luz controlado por el ratón
  const [lightPosition, setLightPosition] = useState([5, 5, 5]);

  // Manejar el movimiento del ratón para actualizar la posición de la luz
  const handleMouseMove = (event) => {
    // Obtener el tamaño del contenedor y ajustar la posición relativa del ratón
    const x = (event.clientX / window.innerWidth) * 10 - 5;
    const y = -(event.clientY / window.innerHeight) * 10 + 5;
    setLightPosition([x, y, 5]); // Actualizar la posición de la luz
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`${styles["ball-container"]} w-[120px] h-[120px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px]`}
        >
          {/* Canvas individual para cada bola */}
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
            {/* Luces configuradas */}
            {/* Renderizar la bola individual */}
            <BilliardBall
              position={[0, 0, 0]}
              color={tech.color}
              logo={tech.logo}
              lightPosition={lightPosition}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      ))}
    </div>
  );
}
