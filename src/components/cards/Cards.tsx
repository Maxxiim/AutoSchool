import styles from "./cards.module.scss";

import { Carousel } from "antd";
import gibdd from "../../assets/cards/gibdd.webp";
import map from "../../assets/cards/map.webp";
import circleMap from "../../assets/cards/circle.webp";
import sale from "../../assets/cards/sale.webp";

const Cards = () => {
  const contentStyle: React.CSSProperties = {
    height: "440px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <section className={styles.cards}>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
        <div className={styles.card}>
          <h2 className={`${styles.cardTitle} ${styles.cardTitleMap}`}>
            Близкое и удобное расположение
          </h2>
          <p className={`${styles.cardDescr} ${styles.cardDescrMap}`}>
            Мы находимся в 3 минутах ходьбы от остановки “Дом торговли”
          </p>
          <img
            className={styles.circleImage}
            src={circleMap}
            alt="Размытый фон"
          />
          <h3 style={contentStyle}>
            <img
              className={styles.cardImage}
              src={map}
              alt="Картинка с картой"
            />
          </h3>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles.cardTitle} ${styles.cardTitleSale}`}>
            Рассрочка
          </h2>
          <p className={`${styles.cardDescr} ${styles.cardDescrSale}`}>
            <b>Мы предлагаем рассрочку на этапе обучения!!!</b>
          </p>
          <h3 style={contentStyle}>
            <img className={styles.cardImage} src={sale} alt="Размытый фон" />
          </h3>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitleGibdd}>Сопровождение в ГИБДД</h2>
          <p className={styles.cardDescrGibdd}>
            {`Регистрация в ГИБДД ${"\n"} сопровождение в ГИБДД на экзамен!${"\n"}Мы думаем и заботимся о наших учениках!`}
          </p>
          <h3 style={contentStyle}>
            <img className={styles.cardImage} src={gibdd} alt="Размытый фон" />
          </h3>
        </div>
      </Carousel>
    </section>
  );
};

export default Cards;
