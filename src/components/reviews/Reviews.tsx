import styles from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">

      <h2 className={styles.reviewsTitle}>Что о нас говорят обучающиеся?</h2>
      <p className={styles.reviewsDescr}>
        Скоро здесь появятся первые отзывы наших учеников...
      </p>
      </div>
    </section>
  );
};

export default Reviews;
