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
import { FormValidator } from "../validation/FormValidator";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
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
          element={<Movies />}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Route path="/savedMovies" element={<SavedMovies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
