import styles from "./logo.module.scss";
import logo from "../../assets/icons/logo.svg";
import type { ReactElement } from "react";
type Props = {
  medium?: boolean;
};

const Logo = ({ medium }: Props): ReactElement => {
  return (
    <a href="/" className={styles.link}>
      <img
        className={medium ? styles.logo : styles.logoHeader}
        src={logo}
        width={350}
        fetchPriority="high"
        decoding="async"
        height={350}
        alt="Логотип автошколы Лидер"
      />
    </a>
  );
};

export default Logo;
