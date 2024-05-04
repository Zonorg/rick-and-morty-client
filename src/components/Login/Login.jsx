import React from "react";
import { validate } from "./validation";
import styles from "../Login/Login.module.css";

export default function Login({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setError] = React.useState({});

  function handleInputChange(e) {
    setError(validate({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.login_page}>
      <div className={styles.img_container}>
        <img
          className={styles.img_login}
          src="./login-image-transparent.png"
          alt="LoginRickAndMorty"
        />
      </div>
      <div>
        <form className={styles.container_form} onSubmit={handleSubmit}>
          <img className={styles.img_title} src="./imgLogin.png" alt="Title" />
          <label className={styles.label_login} htmlFor="username">
            Username:{" "}
          </label>
          <input
            className={styles.input_login}
            type="text"
            name="username"
            onChange={handleInputChange}
            value={userData.username}
          />
          {/* <p>{errors.username}</p> */}
          <label className={styles.label_login} htmlFor="username">
            Password:{" "}
          </label>
          <input
            className={styles.input_login}
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
          />
          {/* <p>{errors.password}</p> */}
          <span className={styles.span_login}>user: rick pass: 12345</span>
          <button className={styles.login_button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
