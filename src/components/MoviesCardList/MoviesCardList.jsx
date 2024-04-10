import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState, useEffect } from "react";
export default function MoviesCardList() {
  const [cardsToShow, setCardsToShow] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setCardsToShow(16);
      } else if (screenWidth >= 768) {
        setCardsToShow(8);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setCardsToShow(5);
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
      setCardsToShow((prev) => prev + 4);
    } else if (window.innerWidth >= 768) {
      setCardsToShow((prev) => prev + 4);
    } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      setCardsToShow((prev) => prev + 2);
    }
  };

  const cards = Array.from({ length: cardsToShow }, (i) => (
    <MoviesCard key={i} name="33 слова о дизайне" />
  ));

  return (
    <section className="cards">
      <ul className="cards__list">{cards}</ul>
      <button className="cards__button" type="button" onClick={handleLoadMore}>
        еще
      </button>
    </section>
  );
}
