// src/components/ContactSection.js

import React from "react";
import styles from "./styles.module.css"; // Importamos los estilos desde el módulo CSS

const ContactSection = () => {
  return (
    <section
      id="contact"
      className={styles.contactSection}
      data-sr-id="15"
      style={{
        visibility: "visible",
        opacity: 1,
        transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        transition:
          "all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
      }}
    >
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className={styles.description}>
        I’m currently working at Amadeus, but I'm always open to new
        opportunities. Feel free to reach out for potential collaborations or
        just to say hello! I’m available and will do my best to respond as soon
        as possible!
      </p>
      <a
        className={styles.emailLink}
        href="mailto:luis.soto.torres3@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactSection;
