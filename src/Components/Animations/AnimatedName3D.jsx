import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  OrbitControls,
  useMatcapTexture,
  Stars,
  Sparkles,
  Html,
} from "@react-three/drei";
import styles from "./AnimatedName3D.module.css"; // Importa los estilos CSS

function HeroText3D({ handleEnter }) {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const refLuis = useRef();
  const refSoto = useRef();
  const refTorres = useRef();

  // Posiciones finales para alinear horizontalmente
  const finalPositionLuis = -6;
  const finalPositionSoto = -2.5;
  const finalPositionTorres = 2;

  // Animación con useFrame
  useFrame((state, delta) => {
    if (refLuis.current) {
      // Animación de "LUIS" (de izquierda al centro)
      refLuis.current.position.x = Math.min(
        refLuis.current.position.x + delta * 2,
        finalPositionLuis
      );
      refLuis.current.position.y = 0; // Asegurar que esté centrado en Y
    }
    if (refSoto.current) {
      // Animación de "SOTO" (de arriba hacia el centro)
      refSoto.current.position.y = Math.max(
        refSoto.current.position.y - delta * 2,
        0
      );
      refSoto.current.position.x = finalPositionSoto; // Mantener en el centro en X
    }
    if (refTorres.current) {
      // Animación de "TORRES" (de derecha al centro)
      refTorres.current.position.x = Math.max(
        refTorres.current.position.x - delta * 2,
        finalPositionTorres
      );
      refTorres.current.position.y = 0; // Asegurar que esté centrado en Y
    }
  });

  return (
    <>
      {/* "LUIS" animado desde la izquierda */}
      <Text3D
        ref={refLuis}
        font={"gt.json"}
        size={1}
        height={0.5}
        position={[-15, 0, 0]} // Inicialmente lejos a la izquierda
        curveSegments={32}
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.1}
      >
        LUIS
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>

      {/* "SOTO" animado desde arriba */}
      <Text3D
        ref={refSoto}
        font={"gt.json"}
        size={1}
        height={0.5}
        position={[0, 10, 0]} // Inicialmente arriba
        curveSegments={32}
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.1}
      >
        SOTO
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>

      {/* "TORRES" animado desde la derecha */}
      <Text3D
        ref={refTorres}
        font={"gt.json"}
        size={1}
        height={0.5}
        position={[15, 0, 0]} // Inicialmente lejos a la derecha
        curveSegments={32}
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.1}
      >
        TORRES
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>

      {/* Botón 3D */}
      <mesh position={[0, -3, 0]} onClick={handleEnter}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial
          className={styles.enterButtonText}
          color="darkmagenta"
        />
        <Html position={[0, 0, 0.6]} transform>
          <div className={styles.enterButtonText} onClick={handleEnter}>
            Entrar
          </div>
        </Html>
      </mesh>
    </>
  );
}

export default function AnimatedName3D({ handleEnter }) {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <OrbitControls enableZoom={true} autoRotate={false} enablePan={false} />
        <Suspense fallback={"Loading..."}>
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Sparkles
            count={200}
            size={3}
            speed={0.02}
            opacity={0.8}
            scale={10}
            color="#fff3b0"
          />
          <HeroText3D handleEnter={handleEnter} />
        </Suspense>
        <ambientLight intensity={0.5} color={"#dee2ff"} />
      </Canvas>
    </div>
  );
}
