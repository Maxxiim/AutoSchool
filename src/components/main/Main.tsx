import styles from "./main.module.scss";

import { Cards } from "../cards";
import { Hero } from "../hero";
import { WhyUs } from "../whyUs";
import { Price } from "../price";
import { Reviews } from "../reviews";
import { Social } from "../social";
import { Map } from "../map";

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Cards />
      <WhyUs />
      <section id="price">
        <Price />
      </section>
      <Reviews />
      <Social />
      <Map />
    </main>
  );
};

export default Main;
