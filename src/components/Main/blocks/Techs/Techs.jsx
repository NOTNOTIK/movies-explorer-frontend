import "./Techs.css";

export default function Techs() {
  return (
    <section className="Techs">
      <h2 className="Techs__title">Технологии</h2>
      <h3 className="Techs__text">7 технологий</h3>
      <p className="Techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>

      <ul className="Techs__nav">
        <li className="Techs__block">HTML</li>
        <li className="Techs__block">CSS</li>
        <li className="Techs__block">JS</li>
        <li className="Techs__block">React</li>
        <li className="Techs__block">Git</li>
        <li className="Techs__block">Express.js</li>
        <li className="Techs__block">mongoDB</li>
      </ul>
    </section>
  );
}
