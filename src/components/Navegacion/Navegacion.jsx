import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navegacion.module.css";

const Navegacion = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`${styles.navbar} ${navActive ? "active" : ""}`}>
      <div>
        <h4 className={styles.logoNav}>Mafe Carrascal</h4>
      </div>
      <a
        className={`${styles.navHamburguer} ${
          navActive ? `${styles.navHamburguerActive}` : ""
        }`}
        onClick={toggleNav}
      >
        <span className={styles.navHamburguerLine}></span>
        <span className={styles.navHamburguerLine}></span>
        <span className={styles.navHamburguerLine}></span>
      </a>
      <div
        className={`${styles.navbarItems} ${
          navActive ? `${styles.navbarItemsActive}` : ""
        }`}
      >
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbarActiveContent}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className={styles.navbarContent}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbarActiveContent}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="#"
              className={styles.navbarContent}
            >
              Prensa
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbarActiveContent}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="kitPrensa"
              className={styles.navbarContent}
            >
              Kit de Prensa
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbarActiveContent}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contacto"
              className={styles.navbarContent}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Mafe Denuncia
      </Link>
    </nav>
  );
};

export default Navegacion;
