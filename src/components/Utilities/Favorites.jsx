import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "../Utilities/Favorites.module.css"

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites); // seleccionar el estado de redux

  return (
    <div className={styles.container} style={{ display: "flex" }}>
      {myFavorites.map((character) => (
        <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          onClose={() => alert("Para eliminar toca el corazon")}
        />
      ))}
    </div>
  );
}
