import styles from "./Contacto.module.css";
const Contacto = () => {
  return (
    <section id="contacto" className={styles.contactSection}>
      <div>
        <h2 className={styles.subTitle}>Contacto</h2>
        <h3 className={styles.descriptionContact}>
          Para más información puedes ponerte en contacto con nuestro equipo
        </h3>
      </div>
      <div className={styles.contactContent}>
        {/* CARD 1 */}
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <i className={`bx bx-map ${styles.contactCardIcon}`}></i>
            <h3 className={styles.contactCardTitle}>Dirección</h3>
            <span className={styles.contactCardData}>
              Bogotá D.C., Colombia
            </span>
            <a
              href="#"
              target="_blank"
              className={styles.contactButton}
              rel="noreferrer"
            ></a>
          </div>
          <div className={styles.contactCard}>
            <i className={`bx bx-phone ${styles.contactCardIcon}`}></i>
            <h3 className={styles.contactCardTitle}>Teléfono</h3>
            <span className={styles.contactCardData}>( + 601) 315 2251359</span>
            <a
              href="#"
              target="_blank"
              className={styles.contactButton}
              rel="noreferrer"
            ></a>
          </div>
          {/* CARD 2 */}
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <i className={`bx bx-mail-send ${styles.contactCardIcon}`}></i>
              <h3 className={styles.contactCardTitle}>Email</h3>
              <span className={styles.contactCardData}>
                mfc@mafecarrascal.com
              </span>
              <a
                href="#"
                target="_blank"
                className={styles.contactButton}
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <form className={styles.contactFormContainer}>
        <div className={styles.container}>
          <label htmlFor="first-name" className={styles.contactLabel}>
            <span className="text-md">Nombre</span>
            <input
              type="text"
              className={`${styles.contactInput} text-md`}
              name="first-name"
              id="first-name"
              required
            />
          </label>

          <label htmlFor="email" className={styles.contactLabel}>
            <span className="text-md">Email</span>
            <input
              type="email"
              className={`${styles.contactInput} text-md`}
              name="email"
              id="email"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className={styles.contactLabel}>
          <span className="text-md">Message</span>
          <textarea
            className={`${styles.contactInput} text-md`}
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-outline-primary buttonFlex">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
