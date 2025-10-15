import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./navigation.module.scss";

const Navigation = ({ ulFooter }) => {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.ul} ${ulFooter ? styles.ulFooter : ""}`}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Главная
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={styles.a} to="/about">
            О нас
          </Link>
        </li>

        <li className={styles.li}>
          <HashLink className={styles.a} smooth to="/#price">
            Цены
          </HashLink>
        </li>

        <li className={styles.li}>
          <Link className={styles.a} to="/documents">
            Документы
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={styles.a} to="/contacts">
            Контакты
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={styles.a} to="/news">
            Новости
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
