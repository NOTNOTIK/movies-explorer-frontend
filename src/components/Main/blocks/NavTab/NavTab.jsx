import "./NavTab.css";
export default function NavTab() {
  return (
    <main className="NavTab" id="NavTab">
      <h2 className="NavTab__title">О проекте</h2>
      <section className="NavTab__main">
        <div className="NavTab__info">
          <div className="NavTab__info-content">
            <h3 className="NavTab__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="NavTab__info-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="NavTab__info-content">
            <h3 className="NavTab__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="NavTab__info-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="NavTab__deadline">
          <div className="NavTab__deadline-block">
            <p className="NavTab__deadline-1week">1 неделя</p>
            <p className="NavTab__deadline-text">Back-end</p>
          </div>
          <div className="NavTab__deadline-block">
            <p className="NavTab__deadline-4week">4 недели</p>
            <p className="NavTab__deadline-text">Front-end</p>
          </div>
        </div>
      </section>
    </main>
  );
}
