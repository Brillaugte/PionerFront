import SectionCardForm1 from "./section-card-form1";
import styles from "./section-card-form.module.css";

const SectionCardForm = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupContainer}>
        <div className={styles.kWrapper}>
          <div className={styles.k}>k]]]]</div>
        </div>
        <div className={styles.card10}>
          <div className={styles.card10Child} />
        </div>
      </div>
      <SectionCardForm1 />
    </div>
  );
};

export default SectionCardForm;
