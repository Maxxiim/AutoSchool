import styles from "./burger.module.scss";

type BurgerProps = {
  open: boolean;
  toggleMenu: () => void;
};

const Burger = ({ toggleMenu, open }: BurgerProps) => {
  return (
    <section className={styles.burger}>
      <button className={styles.button} aria-label="Menu" onClick={toggleMenu}>
        <span
          className={`${styles.line} ${styles.lineOne} ${
            open ? styles.openLineOne : ""
          }`}
        />
        <span
          className={`${styles.line} ${styles.lineTwo} ${
            open ? styles.openLineTwo : ""
          }`}
        />
        <span
          className={`${styles.line} ${styles.lineThree} ${
            open ? styles.openLineThree : ""
          }`}
        />
      </button>
    </section>
  );
};

export default Burger;
