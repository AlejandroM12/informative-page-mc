import { DownloadButton } from ".";
import styles from "./KitPrensaBanner.module.css";

const KitPrensaBanner = () => {
  return (
    <section id="kitPrensa" className={styles.sectionKitPrensa}>
      <div className={styles.backgroundKitPrensaOverlay}></div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h2 className={styles.title}>Kit de Prensa</h2>
          <p className={styles.subtitle}>
            A continuación encuentra el documento de nuestras propuestas.
          </p>
          <p className={styles.subtitle}>Puede leerlo y descargarlo.</p>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default KitPrensaBanner;
