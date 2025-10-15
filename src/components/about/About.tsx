import { Administration } from "../administration";
import { Faq } from "../FAQ";
import { Teachers } from "../teachers";
import styles from "./about.module.scss";
const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <Administration />
        <Teachers />
        <Faq />
      </div>
    </section>
  );
};

export default About;
