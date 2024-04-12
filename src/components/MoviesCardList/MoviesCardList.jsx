import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  onCardLike,
  movies,
  savedMovies,
  onCardDelete,
}) {
  const location = useLocation();
  const [cards, setCards] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setCards(16);
      } else if (screenWidth >= 768) {
        setCards(8);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setCards(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    if (window.innerWidth >= 1280) {
      setCards((prev) => prev + 4);
    } else if (window.innerWidth >= 768) {
      setCards((prev) => prev + 4);
    } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      setCards((prev) => prev + 2);
    }
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {movies?.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} onCardLike={onCardLike} />
        ))}
      </ul>
      {cards < movies?.length && (
        <button
          className="cards__button"
          type="button"
          onClick={handleLoadMore}
        >
          Еще
        </button>
      )}
    </section>
  );
}
