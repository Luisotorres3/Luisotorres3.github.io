import React, { useEffect } from "react";
import styles from "./MatrixEffect.module.css"; // Importa el módulo CSS

export default function MatrixEffect({ onComplete }) {
  useEffect(() => {
    // Desaparecer el efecto después de 5 segundos y llamar a onComplete
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 5000); // Duración de la animación (5 segundos)
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Crear suficientes columnas para llenar toda la pantalla
  const columns = new Array(1000).fill(0).map((_, index) => (
    <div
      key={index}
      className={styles.column}
      style={{ animationDelay: `${Math.random() * 2}s` }} // Añadir un retraso aleatorio
    >
      {"1010101010101010101010101010".split("").map((char, charIndex) => (
        <span key={charIndex} className={styles.number}>
          {char}
        </span>
      ))}
    </div>
  ));

  return <div className={styles.matrix}>{columns}</div>;
}
