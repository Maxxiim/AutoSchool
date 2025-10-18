import styles from "./map.module.scss";

const Map = () => {
  return (
    <section className={styles.map}>
      <iframe
        loading="lazy"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae9b0f5ec8da65cc8bd08c9f43dd3f0280079b93f1211c79fd123210c92a4c755&amp;source=constructor&scroll=false"
        width="100%"
        height="500"
        frameBorder="0"
      ></iframe>
    </section>
  );
};
export default Map;
