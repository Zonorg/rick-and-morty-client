import { Link } from "react-router-dom";
import styles from "../About/About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About(props) {
  return (
    <div className={styles.about_container}>
      <div className={styles.hero_container}>
        <div className={styles.about_content}>
          <h1 className={styles.about_title}>About this project.</h1>
          <h3>Description of the work done:</h3>
          <p>
            Rick and Morty application created with React for the integration of
            what was learned in BootCamp{" "}
            <Link
              className={styles.henry_link}
              to="https://www.soyhenry.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Henry.
            </Link>
          </p>
          <p>
            The interface allows users to search the characters of the series by
            id, select them and see their description.{" "}
          </p>{" "}
          <p>
            The detailed character section includes information about each
            character, such as name, species, gender and their origin of
            appearance.
          </p>
          <h4>Renzo Viscio </h4>
          <Link
            className={styles.social_link}
            to="https://github.com/Zonorg"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub size={22} />
            GitHub
          </Link>
          <Link
            className={styles.social_link}
            to="https://www.linkedin.com/in/renzo-viscio-b69a13217/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
            Linkedin
          </Link>
        </div>
        <img
          className={styles.about_img}
          src="./about-img.png"
          alt="RickAndMorty"
        />
      </div>
    </div>
  );
}
