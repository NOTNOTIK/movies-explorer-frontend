import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import ProtectedRoute from "../../utils/ProtectedRoute";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../PageNotFound/PageNotFound";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

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

  const getUserInfo = async () => {
    try {
      const userData = await apiMain.getUserInfo();
      if (userData) {
        await setCurrentUser(userData);
        localStorage.setItem("isLogin", true);
      }
    } catch (err) {
      console.log("Пользователь не найден", err);
    }
  };

  const handleRegister = (name, email, password) => {
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
          getUserInfo();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    navigate("/", { replace: true });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        />

        <Route path="/" element={<Main />} />

        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/savedMovies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile setCurrentUser={setCurrentUser} onSignOut={onSignOut} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
