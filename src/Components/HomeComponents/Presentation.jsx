import styles from "./styles.module.css";

import BilliardBalls from "../BilliardBall/BilliardBalls";

export default function Presentation() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-start sm:justify-center md:justify-center px-4 sm:px-8 md:px-0 h-100 md:h-screen items-start"
    >
      <div className="w-full md:w-3/5 mt-0 md:mt-8 flex flex-col items-center text-start">
        <div className="w-full md:w-1/2 mt-8 flex flex-col items-center text-start">
          <h1 className="w-full text-5xl font-bold text-start">
            Hey there, I'm <span className={styles.gradientText}>Luis</span>!
          </h1>
          <p className={styles.textGradient}>
            Computer Science Engineer | Software Developer
          </p>
          <p className="w-full mt-4 text-start">
            A developer from Spain. Currently based in Nice working as a
            Software Developer (C++). I'm interested in everything related with
            technologies and I'm currently investigating, discovering and
            studying new ones.
          </p>
        </div>

        <BilliardBalls />
      </div>
    </section>
  );
}
