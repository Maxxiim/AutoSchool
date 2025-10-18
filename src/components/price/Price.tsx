import styles from "./price.module.scss";

import categoryB from "../../assets/price/B.png";

const Price = () => {
  return (
    <section className={styles.price} id="#price">
      <div className={styles.priceWrapper}>
        <div className={styles.priceCategory}>
          <img loading="lazy" src={categoryB} alt="Категория В" />
        </div>
        <div className={styles.info}>
          <p className={styles.descr}>
            Обучение вождению на легковом автомобиле
          </p>
          <h3 className={styles.coast}>
             38 950
            <span>₽</span>
          </h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>В стоимость входят все расходы по обучению</strong>
            </li>
            <li className={styles.li}>Длительность обучения 3 месяца</li>
            <li className={styles.li}>Беспроцентная рассрочка!</li>
            <li className={styles.li}>Опытные и вежливые инструкторы</li>
            <li className={styles.li}>Гибкая система графиков обучения</li>
          </ul>
        </div>
      </div>
      <button className={styles.btn}>Записаться</button>
    </section>
  );
};

export default Price;
