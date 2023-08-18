import mfc from "@/assets/mfc-perfil.webp";
import styles from "./Portada.module.css";

const Portada = () => {
  return (
    <section id="/" className={styles.heroSection}>
      <div className={styles.heroSectionContentBox}>
        <div className={styles.heroSectionContent}>
          <h1 className={styles.heroSectionTitle}>
            <span className={styles.heroSectionTitleColor}>MAFE CARRASCAL</span>
          </h1>
          <p className={styles.heroSectionDescription}>
            Representante electa a la Cámara por PH 2022-2026.
          </p>
        </div>
      </div>
      <div className={styles.heroSectionImg}>
        <img src={mfc} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Portada;
