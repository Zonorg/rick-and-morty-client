import React from "react";
import Card from "./Card.jsx";
import SearchBar from "../NavBar/SearchBar.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.home_content}>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <img
            className={styles.title_hero}
            src="./title-hero.png"
            alt="Main Hero"
          />
          <h1 className={styles.subtitle_hero}>
            Discover everything in a single{" "}
            <span className={styles.hero_span}>location.</span>
          </h1>
          <p className={styles.text_hero}>
            Characters, settings, episodes, and much more.
          </p>
        </div>
        <img
          className={styles.img_hero}
          src="./hero-image.png"
          alt="Main Hero"
        />
      </div>
      <SearchBar onSearch={props.onSearch} />
      <div className={styles.cards_container}>
        {characters ? (
          characters.map((character) => (
            <Card
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              onClose={() => onClose(character.id)}
              key={character.id}
              id={character.id}
            />
          ))
        ) : (
          <h3>No hay personajes</h3>
        )}
      </div>
    </div>
  );
}
