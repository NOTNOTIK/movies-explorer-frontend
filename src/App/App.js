import Main from "../components/Main/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { apiMain } from "../utils/MainApi";
import { movieApi } from "../utils/MoviesApi";
import Movies from "../components/Movies/Movies";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Profile from "../components/Profile/Profile";
import ProtectedRoute from "../utils/ProtectedRoute";
import { currentUserContext } from "../contexts/CurrentUserContext.js";
function App() {
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [savedMoviesMessage, setSavedMoviesMessage] = useState("");
  const token = localStorage.getItem("token");
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
    apiMain
      .authorize(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleLikeMovie(movie) {
    apiMain
      .createMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }
  function handleCheckToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      apiMain
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([movieApi.getMovies()])
        .then(([moviesInfo]) => {
          setMovies(moviesInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <currentUserContext.Provider value={currentUser}>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  onCardLike={handleLikeMovie}
                  movies={movies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/savedMovies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  movies={movies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegistration} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </currentUserContext.Provider>
  );
}

export default App;
/*   <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={<Movies />}
                loggedIn={loggedIn}
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
          */
