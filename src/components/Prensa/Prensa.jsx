import styles from "./Prensa.module.css";
import GalleryCard from "./GalleryCard";
import AudioCard from "./AudioCard";
import VideoBlog from "./VideoBlog";
import Columnas from "./Columnas";

const Prensa = () => {
  return (
    <section className={styles.prensaSection}>
      <div className={styles.backgroundPrensaOverlay}></div>
      <div className={styles.prensaTitleContainer}>
        <h2 className={styles.prensaTitle}>PRENSA</h2>
      </div>
      <div className={styles.containerPrensa}>
        <div className={styles.items}>
          <div className={styles.iconWrapper}>
            <AudioCard />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.iconWrapper}>
            <GalleryCard />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.iconWrapper}>
            <VideoBlog />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.iconWrapper}>
            <Columnas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prensa;
