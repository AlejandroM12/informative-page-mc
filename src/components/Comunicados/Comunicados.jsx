import { comunicados } from "@/data";
import styles from "./Comunicados.module.css";

const Comunicados = () => {
  return (
    <section className={styles.portfolioSection} id="MyPortfolio">
      <div className={styles.portfolioContainerBox}>
        <div className={styles.portfolioContainer}>
          <h2 className={styles.sectionTitle}>Comunicados</h2>
        </div>
      </div>
      <div className={styles.portfolioSectionContainer}>
        {comunicados?.map((item, index) => (
          <div key={index} className={styles.portfolioSectionCard}>
            <a href="#" className={styles.linkImg}>
              <div className={styles.portfolioSectionImg}>
                <img src={item.src} alt="Placeholder" />
              </div>
            </a>
            <div className={styles.portfolioSectionCardContent}>
              <div>
                <h3 className={styles.portfolioSectionTitle}>
                  {item.description}
                </h3>
                <p className="text-md">{item.fecha}</p>
              </div>
              <p className={styles.portfolioLink}>
                Leer más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comunicados;
