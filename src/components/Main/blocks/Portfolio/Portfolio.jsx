import "./Portfolio.css";
import arrow from "../../../../images/arrow.svg";
export default function Portfolio() {
  return (
    <section className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>
      <div className="Portfolio__block">
        <h3 className="Portfolio__performance">Учебный проект Mesto</h3>
        <a
          href="https://github.com/NOTNOTIK/react-mesto-api-full-gha"
          target="_blank"
        >
          <img className="Portfolio__arrow" src={arrow} />
        </a>
      </div>
      <div className="Portfolio__block">
        <h3 className="Portfolio__performance">Одностраничный сайт</h3>
        <a href="https://notnotik.github.io/POIZON/" target="_blank">
          <img className="Portfolio__arrow" src={arrow} />
        </a>
      </div>
      <div className="Portfolio__block">
        <h3 className="Portfolio__performance">Адаптивный сайт</h3>
        <a href="https://notnotik.github.io/VITA-seprik/" target="_blank">
          <img className="Portfolio__arrow" src={arrow} />
        </a>
      </div>
    </section>
  );
}
