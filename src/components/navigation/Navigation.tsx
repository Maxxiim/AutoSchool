import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./navigation.module.scss";

type Props = {
  open?: boolean;
  ulFooter?: boolean;
  isOpen?: () => void;
};

const Navigation = ({ ulFooter, open, isOpen }: Props) => {
  const fixedNav = open ? styles.ulActive : styles.ul;

  return (
    <nav className={styles.nav}>
      <ul
        className={`${styles.ul} ${fixedNav} ${
          ulFooter ? styles.ulFooter : ""
        }`}
      >
        <li className={styles.li} onClick={isOpen}>
          <Link className={styles.a} to="/">
            Главная
          </Link>
        </li>

        <li className={styles.li} onClick={isOpen}>
          <Link className={styles.a} to="/about">
            О нас
          </Link>
        </li>

        <li className={styles.li} onClick={isOpen}>
          <HashLink className={styles.a} smooth to="/#price">
            Цены
          </HashLink>
        </li>

        <li className={styles.li} onClick={isOpen}>
          <Link className={styles.a} to="/documents">
            Документы
          </Link>
        </li>

        <li className={styles.li} onClick={isOpen}>
          <Link className={styles.a} to="/contacts">
            Контакты
          </Link>
        </li>

        <li className={styles.li} onClick={isOpen}>
          <Link className={styles.a} to="/news">
            Новости
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
