import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { IoCodeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.footer_content}>
        <p>Rick and Morty App</p>
        <p className={styles.developed_by}>
          <IoCodeOutline size={23} />
          Developed by
          <Link
            className={styles.profile_link}
            target={"_blank"}
            rel="noreferrer"
            to="https://portfolio-renzo-viscio.vercel.app/"
          >
            Renzo Viscio
          </Link>
        </p>
      </div>
    </footer>
  );
}
