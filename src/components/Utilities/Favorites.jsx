import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "../Utilities/Favorites.module.css";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites); // seleccionar el estado de redux

  return (
    <div className={styles.fav_container}>
      {myFavorites.length === 0 ? (
        <p className={styles.no_favs_text}>No favorites yet.</p>
      ) : (
        myFavorites.map((character) => (
          <Card
            key={character.id} // Asegúrate de tener una clave única para cada elemento de la lista
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => alert("Remove from favorites to delete")}
          />
        ))
      )}
    </div>
  );
}
