import styles from "./SobreMi.module.css";
import mfca from "@/assets/mfc-a.webp";

const SobreMi = () => {
  return (
    <section id="sobreMi" className={styles.aboutSection}>
      <div className={styles.aboutSectionImg}>
        <img src={mfca} alt="Sobre Mi" />
      </div>
      <div className={styles.heroSectionContentBox}>
        <div className={styles.heroSectionContent}>
          <h1 className={styles.sectionAboutTitle}>Perfil</h1>
          <p className={styles.heroSectionDescription}>
            María Fernanda Carrascal Rojas, más conocida como Mafe Carrascal, es
            una activista política colombiana, defensora de derechos humanos,
            fundadora de El País Primero e Ideas por Bogotá.
          </p>
          <p className={styles.heroSectionDescription}>
            Es profesional en Relaciones Internacionales de la Universidad del
            Rosario, especialista en Gobierno Gerencia y Asuntos Públicos de la
            Universidad Externado de Colombia y becaria de Liderazgo por Bogotá
            de la Universidad de los Andes. Exasesora en la Unidad de Trabajo
            Legislativo (UTL) de Inti Asprilla, Representante a la Cámara por
            Bogotá del Partido Verde, partido de oposición.
          </p>
          <p className={styles.heroSectionDescription}>
            Columnista, conferencista y analista en diferentes medios de
            comunicación de su país. Entre las campañas más conocidas de su
            activismo políticos se encuentran #NoAlGrupoAVAL de Sarmiento
            Angulo, una protesta ética por los sobornos de Odebrecht y
            #RenuncieFiscal, protestas por las actuaciones del exfiscal Nestor
            Humberto Martínez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
