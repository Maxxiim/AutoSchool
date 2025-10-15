import { Card } from "antd";
import styles from "./administration.module.scss";

const { Meta } = Card;

const administration = [
  {
    name: "Иванов Иван Иванович",
    role: "Основатель и директор автошколы ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHl6KjWfFlCU0GFvm7tdyTwmkiMMDvsUc9SVM5DRplPXNsJwJLUMns9Azk0h3-524if0&usqp=CAU",
  },
  {
    name: "Иванов Иван Иванович",
    role: `Администратор автошколы`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHl6KjWfFlCU0GFvm7tdyTwmkiMMDvsUc9SVM5DRplPXNsJwJLUMns9Azk0h3-524if0&usqp=CAU",
  },
];

const Administration = () => {
  return (
    <section className={styles.teachers}>
      <div className="container">
        <h2 className={styles.title}>Руководство и администрация автошколы</h2>
        <div className={styles.cards}>
          {administration.map((t, i) => (
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
                description={`${t.role} "Центр-Лидер"`}
                className={styles.meta}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Administration;
