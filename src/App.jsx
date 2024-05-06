import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/Utilities/Error404";
import Login from "./components/Login/Login.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import Cards from "./components/Card/Cards.jsx";
import About from "./components/About/About.jsx";
import Favorites from "./components/Utilities/Favorites";
import Detail from "./components/Detail/Detail.jsx";
import Footer from "./components/Footer/Footer";
import apiUrl from "./main.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const username = "rick";
  const password = "12345";

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const response = await fetch(`${apiUrl}/rickandmorty/onsearch/${id}`);
      const data = await response.json();
      if (data.name) {
        if (!characters.some((character) => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          navigate("/home");
        } else {
          window.alert("Character already added.");
        }
      } else {
        window.alert(`Character with ID ${id} does not exist.`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <div className="main_content">
        <Routes>
          <Route
            path="/home"
            element={
              <Cards
                characters={characters}
                onSearch={onSearch}
                onClose={onClose}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Login login={login} />} />
          <Route path="/favorites" element={<Favorites />} />
          {characters.length === 0 && <Route path="*" element={<Error404 />} />}
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
