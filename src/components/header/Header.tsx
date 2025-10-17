import styles from "./header.module.scss";
import { useState } from "react";

import { Navigation } from "../navigation";
import { Burger } from "../burger";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const isOpen = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header} id="header">
      <div className="container">
        <Burger toggleMenu={toggleMenu} open={open} />
        <Navigation open={open} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
