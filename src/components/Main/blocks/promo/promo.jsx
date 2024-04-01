import "./promo.css";
import promo from "../../../../images/promo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <img className="promo__logo" src={promo} alt="Лого" />
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#NavTab" className="promo__button">
          Узнать больше
        </a>
      </div>
    </section>
  );
}
