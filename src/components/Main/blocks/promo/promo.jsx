import "./promo.css";
import promo from "../../../../images/promo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <img className="promo__logo" src={promo} />
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета <br />
          Веб-разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">
          <p>
            <a href="#NavTab">Узнать больше</a>
          </p>
        </button>
      </div>
    </section>
  );
}
