import { Logo } from "../logo";

import styles from "./hero.module.scss";
const medium = true;

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo medium={medium} />
          <div className={styles.heroBlock}>
            <h1 className={styles.title}>
              <a
                href="https://yandex.ru/maps/10833/uzlovaya/house/ulitsa_beklemishcheva_44a/Z0EYdwJmTkUCQFtpfXV2d3lqbA==/?ll=38.156951%2C53.976559&z=20.01"
                target="_blank"
                aria-label="Адрес главного офиса Автошколы"
                rel="noopener noreferrer"
              >
                <span>Тульская область</span>
                <span>Узловая</span>
                <span>Беклемищева 44А</span>
                <span>3 этаж, Офис 306</span>
              </a>
            </h1>
            <ul className={styles.phoneBlock}>
              <li className={styles.phone}>
                <svg
                  className={styles.phoneImage}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.621 10.544C6.891 9.811 6.19 9.11 5.456 8.38c-.933-.992-1.105-1.912-.671-2.234l.889-.513a1.163 1.163 0 00.425-1.588L4.765 1.732a1.163 1.163 0 00-1.589-.425l-.889.513c-2.884 1.665.464 7.013 1.864 8.413l1.616 1.616c1.4 1.4 6.748 4.748 8.413 1.864l.513-.89a1.163 1.163 0 00-.425-1.588L11.956 9.9a1.163 1.163 0 00-1.588.425l-.514.89c-.321.433-1.24.26-2.233-.672z"
                    fill=""
                  ></path>
                </svg>
                <a href="tel:+71231232123">+ 7 492 123 21 23</a>
              </li>
              <li className={styles.phone}>
                <svg
                  className={styles.phoneImage}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.621 10.544C6.891 9.811 6.19 9.11 5.456 8.38c-.933-.992-1.105-1.912-.671-2.234l.889-.513a1.163 1.163 0 00.425-1.588L4.765 1.732a1.163 1.163 0 00-1.589-.425l-.889.513c-2.884 1.665.464 7.013 1.864 8.413l1.616 1.616c1.4 1.4 6.748 4.748 8.413 1.864l.513-.89a1.163 1.163 0 00-.425-1.588L11.956 9.9a1.163 1.163 0 00-1.588.425l-.514.89c-.321.433-1.24.26-2.233-.672z"
                    fill=""
                  ></path>
                </svg>
                <a href="tel:+71231232123">+ 7 492 123 21 23</a>
              </li>
            </ul>
          </div>
          <button className={styles.button}>
            <a href="#">Записаться</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
