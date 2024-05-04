import React from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { PiAlienFill } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose, id }) {
  const [isFav, setFav] = React.useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav) {
      setFav(false);
      dispatch(removeFavorite(id));
    } else {
      setFav(true);
      dispatch(addFavorite({ name, species, gender, image, id }));
    }
  }

  React.useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  });

  return (
    <div className={styles.container_card}>
      <button onClick={onClose} className={styles.close_button}>
        <IoMdClose size={25} />
      </button>
      <img src={image} alt={name} className={styles.img_card} />
      <div className={styles.card_content}>
        <div className={styles.card_info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.subtitles}>
            <PiAlienFill size={18} />
            {species}
          </p>
          <p className={styles.subtitles}>
            <BsGenderAmbiguous size={18} />
            {gender}
          </p>
        </div>
        <div className={styles.bottom_buttons}>
          {isFav ? (
            <button className={styles.favorite_button} onClick={handleFavorite}>
              <MdFavorite className={styles.like} size={20} />
              Remove favorite
            </button>
          ) : (
            <button className={styles.favorite_button} onClick={handleFavorite}>
              <CiHeart className={styles.dislike} size={40} />
            </button>
          )}
        </div>
      </div>
      <Link className={styles.read_more} to={`/detail/${id}`}>
        <BsInfoCircle />
        Read More
      </Link>
    </div>
  );
}
