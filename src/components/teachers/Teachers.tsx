import { Card } from "antd";
import styles from "./teachers.module.scss";

const { Meta } = Card;

const teachers = [
  {
    name: "Гесс Дмитрий Юрьевич",
    role: "Преподаватель теории.",
    experience: "Стаж работы: 15+ лет",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-sticking-out-tongue_23-2150171206.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Катаскин Алексей Владимирович",
    role: "Инструктор по вождению категории B",
    experience: "Стаж работы: 12+ лет",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-sticking-out-tongue_23-2150171206.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

const Teachers = () => {
  return (
    <section className={styles.teachers}>
      <div className="container">
        <h2 className={styles.title}>Ваши наставники</h2>
        <div className={styles.cards}>
          {teachers.map((t, i) => (
            <Card
              hoverable
              className={styles.card}
              key={i}
              cover={
                <img alt={t.name} src={t.image} className={styles.image} />
              }
            >
              <Meta
                title={t.name}
                description={`${t.role}\n${t.experience}`}
                className={styles.meta}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
