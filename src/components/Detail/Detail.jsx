import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { PiAlienFill, PiMonitorPlay } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoPlanet, IoLocationSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();

  const getIdData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/rickandmorty/detail/${id}`
      );
      const data = await response.json();
      setInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      window.alert("No character with that ID");
    }
  };

  useEffect(() => {
    getIdData();
  }, []);

  return (
    <div className={styles.detail_container}>
      {infoDetail.id ? (
        <>
          <div className={styles.detail_content}>
            <img
              className={styles.detail_img}
              src={infoDetail.image}
              alt={infoDetail.name}
            />
            <div className={styles.detail_info}>
              <h1 className={styles.detail_title}>{infoDetail.name}</h1>
              <h3 className={styles.detail_subtitle}>
                <PiMonitorPlay size={30} /> First aparition: Episode{" "}
                {infoDetail.episode[0].split("/").pop()}
              </h3>
              <div className={styles.info_container}>
                <p className={styles.detail_subtitle}>
                  <MdOutlineMonitorHeart size={25} />
                  {infoDetail.status}
                </p>
                <p className={styles.detail_subtitle}>
                  <PiAlienFill size={25} /> {infoDetail.species}
                </p>
                <p className={styles.detail_subtitle}>
                  <BsGenderAmbiguous size={25} /> {infoDetail.gender}
                </p>
                <div className={styles.cards_container}>
                  <div className={styles.detail_card}>
                    <IoPlanet size={40} /> <p>Origin</p>
                    <p style={{ color: "#01b4c6" }}>{infoDetail.origin}</p>
                  </div>
                  <div className={styles.detail_card}>
                    <IoLocationSharp size={40} />
                    <p>Location</p>
                    <p style={{ color: "#01b4c6" }}>{infoDetail.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className={styles.return_link} to="/home">
            <FaArrowLeftLong className={styles.return_icon} size={25} />
            Search more characters
          </Link>
        </>
      ) : (
        <div className={styles.detail_loading}>
          <h3>Loading ...</h3>
        </div>
      )}
    </div>
  );
}
