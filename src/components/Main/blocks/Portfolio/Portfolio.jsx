import "./Portfolio.css";
import arrow from "../../../../images/arrow.svg";
export default function Portfolio() {
  return (
    <section className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>
      <ul className="Portfolio__list">
        <li className="Portfolio__block">
          <a
            href="https://github.com/NOTNOTIK/react-mesto-api-full-gha"
            target="_blank"
          >
            <h3 className="Portfolio__performance">Учебный проект Mesto</h3>
            <img className="Portfolio__arrow" src={arrow} alt="Кнопка" />
          </a>
        </li>
        <li className="Portfolio__block">
          <a href="https://notnotik.github.io/POIZON/" target="_blank">
            <h3 className="Portfolio__performance">Одностраничный сайт</h3>
            <img className="Portfolio__arrow" src={arrow} alt="Кнопка" />
          </a>
        </li>
        <li className="Portfolio__block">
          <a href="https://notnotik.github.io/VITA-seprik/" target="_blank">
            <h3 className="Portfolio__performance">Адаптивный сайт</h3>
            <img className="Portfolio__arrow" src={arrow} alt="Кнопка" />
          </a>
        </li>
      </ul>
    </section>
  );
}
