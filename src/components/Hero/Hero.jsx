import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankush</h1>
        <p className={styles.description}>
          I'm a Front-End developer with 2.7 years of experience using React and
          Angulas.JS. Reach out if you'd like to learn more!
        </p>

        <div className={styles.buttonContainer}>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1c_LHY8QQC_xuPHwPyk6hgul8nIw8veNQ/view" target="_blank" className={styles.contactBtn}>
            My Resume
          </a>

        </div>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
