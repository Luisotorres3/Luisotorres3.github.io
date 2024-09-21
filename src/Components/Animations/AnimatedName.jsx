import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedName.module.css"; // Importa el módulo CSS
import MatrixEffect from "./MatrixEffect"; // Importa el efecto Matrix

export default function AnimatedName({ handleEnter }) {
  const [showMatrix, setShowMatrix] = useState(false);

  const handleButtonClick = () => {
    setShowMatrix(true);
  };

  return (
    <div className={styles.nameContainer}>
      {showMatrix && <MatrixEffect onComplete={handleEnter} />}
      {!showMatrix && (
        <div className={styles.nameLine}>
          {/* Nombre: Aparece desde el extremo izquierdo */}
          <motion.h1
            className={styles.namePart}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            Luis
          </motion.h1>

          {/* Primer Apellido: Aparece desde el extremo superior */}
          <motion.h1
            className={styles.namePart}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 5, delay: 1, ease: "easeOut" }}
          >
            Soto
          </motion.h1>

          {/* Segundo Apellido: Aparece desde el extremo derecho */}
          <motion.h1
            className={styles.namePart}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5, delay: 1.5, ease: "easeOut" }}
          >
            Torres
          </motion.h1>
        </div>
      )}

      {/* Botón "Entrar" */}
      {!showMatrix && (
        <motion.button
          className={styles.enterButton}
          onClick={handleButtonClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
        >
          Entrar
        </motion.button>
      )}
    </div>
  );
}
