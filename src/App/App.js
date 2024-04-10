import Main from "../components/Main/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { apiMain } from "../utils/MainApi";
import Movies from "../components/Movies/Movies";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Profile from "../components/Profile/Profile";
import ProtectedRoute from "../utils/ProtectedRoute";
function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = (name, email, password) => {
    const data = { name, email, password };

    apiMain
      .registration(data)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log(data);
      });
  };
  const handleLogin = (email, password) => {
    const data = { email, password };

    apiMain
      .login(data)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);

          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    const checkLike = isLiked;

    checkLike.then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
    checkLike.catch((err) => {
      console.log(err);
    });
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={<Movies />}
              onCardLike={handleCardLike}
              cards={cards}
              openBurger={openBurgerMenu}
            />
          }
        />

        <Route
          path="/savedMovies"
          element={
            <ProtectedRoute
              element={<SavedMovies />}
              onCardLike={handleCardLike}
              cards={cards}
              openBurger={openBurgerMenu}
            />
          }
        />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegistration} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
