import styles from "../About/About.module.css";

export default function About(props) {
  return (
    <div>
      <h3>
        Renzo Viscio{" "}
        <a href="https://github.com/Zonorg" target={"_blank"} rel="noreferrer">
          GitHub
        </a>
      </h3>
      <img
        className={styles.imgAbout}
        src="./about-img.jpg"
        alt="RickAndMorty"
      />
      <p>Descripción del trabajo realizado: </p>
      <p>
        Aplicación de Rick y Morty creada con React para la integración de lo
        aprendido en el BootCamp
      </p>
      <a
        className={styles.linkHenry}
        href="https://www.soyhenry.com/"
        target={"_blank"}
        rel="noreferrer"
      >
        Henry
      </a>
      .{" "}
      <p>
        La interfaz permite a los usuarios buscar los personajes de la serie por
        id, seleccionarlos y ver su descripción.{" "}
      </p>{" "}
      <p>
        La sección detallada de personajes incluye información de cada uno de
        ellos, como nombre, especie, género y su origen de aparición.
      </p>
    </div>
  );
}
