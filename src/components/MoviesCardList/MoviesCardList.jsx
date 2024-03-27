import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList() {
  const cards = Array.from({ length: 16 }, (i) => (
    <MoviesCard key={i} name="33 слова о дизайне" />
  ));
  return (
    <section className="cards">
      <main className="cards__container">
        <ul className="cards__list">{cards}</ul>
        <div className="button__container">
          <button className="cards__button" type="button">
            Еще
          </button>
        </div>
      </main>
    </section>
  );
}
