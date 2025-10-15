import styles from "./header.module.scss";

import { Navigation } from "../navigation";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
