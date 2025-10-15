import styles from "./logo.module.scss";
import logo from "../../assets/icons/logo.svg";

const Logo = ({ medium }) => {
  return (
    <a href="/" className={styles.link}>
      <img
        className={medium ? styles.logo : styles.logoHeader}
        src={logo}
        alt="Логотип автошколы Лидер"
      />
    </a>
  );
};

export default Logo;
