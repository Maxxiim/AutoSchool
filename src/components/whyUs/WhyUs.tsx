import styles from "./whyUs.module.scss";

import money from "../../assets/whyus/money.svg";
import time from "../../assets/whyus/time.svg";
import sale from "../../assets/whyus/percent.svg";
import rating from "../../assets/whyus/rating.svg";

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img src={money} alt="Иконка Приятные цены" />
          <span>Приятные цены</span>
        </li>
        <li className={styles.li}>
          <img src={time} alt="Иконка Гибкий график" />
          <span>Гибкий график</span>
        </li>

        <li className={styles.li}>
          <img src={rating} alt="Иконка Высокая сдаваемость" />
          <span>Высокая сдаваемость</span>
        </li>

        <li className={styles.li}>
          <img src={sale} alt="Иконка Беспроцентная рассрочка" />
          <span>Беспроцентная рассрочка</span>
        </li>
      </ul>
    </section>
  );
};

export default WhyUs;
