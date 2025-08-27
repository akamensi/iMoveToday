import styles from "./AppHome.module.css";
import OurTopGems from "../PropertyComponents/OurTopGems";

const AppHome = () => {
  return (
    <div className={styles.appHome}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our top gems</h2>
        <OurTopGems />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our top gems</h2>
        <OurTopGems />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our top gems</h2>
        <OurTopGems />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our top gems</h2>
        <OurTopGems />
      </section>
    </div>
  );
};

export default AppHome;
