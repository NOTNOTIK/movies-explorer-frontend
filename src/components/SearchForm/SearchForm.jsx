import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

export default function SearchForm({ handleSearch, setSavedMovies }) {
  const [shorts, setShorts] = useState(false);
  const [placeholderContent, setPlaceholderContent] = useState("Фильм");
  const [inputValue, setInputValue] = useState("");
  const { pathname } = useLocation();

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  // выбрать короткометражки
  const onChangeFilter = () => {
    setShorts(!shorts);
    handleSearch(inputValue, !shorts, pathname);
    if (pathname === "/movies") {
      localStorage.setItem("shorts", !shorts);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!inputValue) {
      setPlaceholderContent("Нужно ввести ключевое слово");
      return;
    }
    if (pathname === "/movies") {
      localStorage.setItem("query", inputValue);
    }
    handleSearch(inputValue, shorts, pathname);
  };

  useEffect(() => {
    if (pathname === "/movies") {
      const savedInputValue = localStorage.getItem("query");
      const savedShorts = JSON.parse(localStorage.getItem("shorts"));
      if (savedInputValue) {
        setInputValue(savedInputValue);
      }
      if (savedShorts) {
        setShorts(savedShorts);
      }
      if (savedInputValue || savedShorts === true) {
        handleSearch(savedInputValue, savedShorts, pathname);
      }
    } else {
      setShorts(false);
      setInputValue("");
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies") || "[]"));
    }
  }, [pathname]);

  return (
    <>
      <section className="search">
        <div className="search-container">
          <form className="SearchForm" onSubmit={handleSubmit}>
            <input
              className="SearchForm__input"
              type="text"
              placeholder="Фильм"
              value={inputValue}
              onChange={handleChange}
            />
            <button className="SearchForm__button">Найти</button>
          </form>
          <FilterCheckbox onChangeFilter={onChangeFilter} shorts={shorts} />
        </div>
      </section>
    </>
  );
}
