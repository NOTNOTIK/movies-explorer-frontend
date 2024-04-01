import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList() {
  const cards = Array.from({ length: 16 }, (i) => (
    <MoviesCard key={i} name="33 слова о дизайне" />
  ));
  return (
    <section className="cards">
      <ul className="cards__list">{cards}</ul>
      <button className="cards__button" type="button">
        Еще
      </button>
    </section>
  );
}
