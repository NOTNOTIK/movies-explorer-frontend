import photo from "../../../../images/student.jpg";
import "./AboutMe.css";
export default function AboutMe() {
  return (
    <section className="AboutMe">
      <h2 className="AboutMe__title">Студент</h2>
      <div className="AboutMe__content">
        <img className="AboutMe__photo" src={photo} />
        <div className="AboutMe__info">
          <h3 className="AboutMe__name">Егор</h3>
          <p className="AboutMe__age">Веб-разработчик, 19 лет</p>
          <p className="AboutMe__description">
            Я родился в лучшем городе мира - Вологде, после выпуска 9 класса
            переехал в Москву и живу здесь по сей день. Отучился год на повара,
            и на втором курсе кулинарного колледжа решил пройти курсы от
            Яндекса, а на третьем курсе решил сменить колледж и специальность на
            веб-разработчика. Сегодня я пишу диплом по курсам, учусь в Колледже
            связи №54 им. П. М. Вострухина. Хочу найти работу и перехать жить
            отдельно
          </p>
          <a
            className="AboutMe__Link"
            href="https://github.com/NOTNOTIK"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
