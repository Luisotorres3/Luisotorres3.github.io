import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Decal, OrbitControls, Texture } from "@react-three/drei";
import { TextureLoader } from "three";

const backgroundTexture = require("../../assets/images/texture_ball.jpg");
// Componente de bola 3D para cada planeta o satélite
function Ball({ position, color, textureUrl, radius, rotationSpeed }) {
  // Usar `useLoader` siempre de forma incondicional
  const texture = useLoader(TextureLoader, textureUrl || "");
  const base = useLoader(TextureLoader, backgroundTexture); // Textura de la bola

  // Referencia a la malla para rotación
  const mesh = useRef();

  // Rotar la bola sobre sí misma en el eje Y
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group>
      <mesh ref={mesh} position={position} castShadow receiveShadow>
        {/* Geometría de la esfera */}

        <sphereGeometry args={[radius, 32, 32]} />
        {/* Material con textura y color */}
        <meshStandardMaterial
          map={base}
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
    </group>
  );
}

// Componente principal para el sistema de planetas
export default function PlanetSystem() {
  // Definir textura para el planeta central
  const planetTexture =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Earth_from_Space.jpg/768px-Earth_from_Space.jpg";

  // Datos de las tecnologías (satélites)
  const technologies = [
    {
      name: "JavaScript",
      color: "#f7df1e",
      texture:
        "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
      position: [5, 0, 0],
    },
    {
      name: "React",
      color: "#61DAFB",
      texture:
        "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
      position: [-5, 0, 0],
    },
    {
      name: "Python",
      color: "#306998",
      texture:
        "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
      position: [0, 5, 0],
    },
    {
      name: "Node.js",
      color: "#339933",
      texture:
        "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
      position: [0, -5, 0],
    },
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} shadows>
        {/* Luz ambiental suave */}
        <ambientLight intensity={0.3} />
        {/* Luz direccional principal */}
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

        <Suspense fallback={null}>
          {/* Planeta central */}
          <Ball
            position={[0, 0, 0]}
            textureUrl={planetTexture}
            radius={2}
            rotationSpeed={0.005}
          />

          {/* Satélites (tecnologías) */}
          {technologies.map((tech, index) => (
            <Ball
              key={index}
              position={tech.position}
              color={tech.color}
              textureUrl={tech.texture}
              radius={0.75}
              rotationSpeed={0.02}
            />
          ))}
        </Suspense>

        {/* Control de órbita para rotar la vista */}
      </Canvas>
    </div>
  );
}
