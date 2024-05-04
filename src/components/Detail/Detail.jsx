import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setInfo(char);
        } else {
          window.alert("No character with that ID");
        }
      })
      .catch((err) => {
        window.alert("No character with that ID");
      });

    return () => setInfo({});
  }, [id]);

  return (
    <div className={styles.containerDetail}>
      <div>
        <button onClick={backToHome} className={styles.botonVolver}>
          Volver
        </button>
      </div>
      {infoDetail.id ? (
        <div>
          <h3>{infoDetail.name}</h3>
          <h5>Status: {infoDetail.status}</h5>
          <h5>Specie: {infoDetail.species}</h5>
          <h5>Gender: {infoDetail.gender}</h5>
          <h5>Origin: {infoDetail.origin}</h5>
          <div>
            <img
              className={styles.imgDetail}
              src={infoDetail.image}
              alt={infoDetail.name}
            />
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}
