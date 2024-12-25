import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import ProtectedRoute from "../../utils/ProtectedRoute";
import InfoTooltip from "../InfoToolTip/InfoToolTip.js";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../PageNotFound/PageNotFound";
import complete from "../../images/Complete.svg";
import error from "../../images/Error.svg";
import Header from "../Header/Header";
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState("");
  const [infoTooltipText, setInfoTooltipText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  function handleCheckToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      apiMain
        .checkToken(jwt)
        .then((res) => {
          getUserInfo();
          setLoggedIn(true);
          routeNavigate();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  const routeNavigate = () => {
    const loggedIn = localStorage.getItem("isLogin");
    if (loggedIn) {
      if (
        location.pathname === "/signup" ||
        location.pathname === "/signin" ||
        location.pathname === "/"
      ) {
        navigate("/movies");
      }
    }
  };
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
        setInfoTooltipText("Вы успешно зарегистрировались!");
        setIsInfoTooltipOpen(true);
        setInfoTooltipImage(complete);
        handleLogin(email, password);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setInfoTooltipText("Что-то пошло не так! Попробуйте ещё раз.");
        setInfoTooltipImage(error);
        console.log(err);
      })
      .finally(() => {
        console.log(data);
      });
  };
  const handleLogin = async (email, password) => {
    try {
      const res = await apiMain.authorize({ email, password });
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        await getUserInfo();
        navigate("/movies", { replace: true });
        return true;
      }
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setInfoTooltipText("Что-то пошло не так! Попробуйте ещё раз.");
      setInfoTooltipImage(error);
    }
  };
  const onSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    navigate("/", { replace: true });
  };
  function closeAllPopup() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Header />
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/savedMovies"
          element={
            <ProtectedRoute>
              <Header />
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Header />
              <Profile setCurrentUser={setCurrentUser} onSignOut={onSignOut} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopup}
        logo={infoTooltipImage}
        name={infoTooltipText}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
