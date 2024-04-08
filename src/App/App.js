import Main from "../components/Main/Main";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
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

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };
  function handleCardLike(card) {
    console.log("хуйхуйхуй");
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
    <BrowserRouter>
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
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
