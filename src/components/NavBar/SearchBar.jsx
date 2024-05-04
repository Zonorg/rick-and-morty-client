import { useState } from "react";
import styles from "./Search.module.css";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

export default function SearchBar(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onSearch(text);
    }
  }

  function handleClick() {
    props.onSearch(text);
  }

  function handleRandomClick() {
    props.onSearch(getRandomCharacter());
  }

  function getRandomCharacter() {
    const maxId = 826; // Este es el ID máximo de los personajes disponibles en la API
    const randomId = Math.floor(Math.random() * maxId) + 1; // Genera un número aleatorio entre 1 y el ID máximo
    return randomId.toString();
  }

  return (
    <div className={styles.containerSearchBar}>
      <input
        type="search"
        value={text}
        placeholder="Search any character by id..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchbar_input}
      />
      <button onClick={handleClick} className={styles.searchbar_button}>
        <IoIosAdd size={25} />
        Add
      </button>
      <button onClick={handleRandomClick} className={styles.searchbar_button}>
        <GiPerspectiveDiceSixFacesRandom size={25} />
        Random
      </button>
    </div>
  );
}
