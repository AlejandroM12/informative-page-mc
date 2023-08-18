import { description } from "@/data";
import styles from "./Descripcion.module.css";

const Descripcion = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsSectionContainer}>
        {description?.map((item, index) => (
          <div key={index} className={styles.skillsSectionCard}>
            <div className={styles.skillsSectionImg}>
              <img src={item.src} alt="skill icon" />
            </div>
            <div className={styles.skillsSectionCardContent}>
              <p className={styles.skillsSectionDescription}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Descripcion;
