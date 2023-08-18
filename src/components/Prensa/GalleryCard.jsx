import "./Card.css";
import styles from "./Prensa.module.css";

const GalleryCard = () => {
  return (
    <a href="#" className="card wallet">
      <div className="overlay"></div>
      <div className="circle">
        <svg
          width="80px"
          height="88px"
          viewBox="0 0 48 48"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="0.5"
          stroke="#6A5297"
          fill="#6A5297"
        >
          <defs></defs>
          <path
            className="cls-1"
            fill="none"
            stroke="#6A5297"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
            d="M7.48,5.5a2,2,0,0,0-2,2h0v33a2,2,0,0,0,2,2H40.52a2,2,0,0,0,2-2h0v-33a2,2,0,0,0-2-2H7.48Z"
          />
          <path
            className="cls-1"
            fill="#6A5297"
            stroke="#6A5297"
            strokeLinecap="round"
            strokeWidth="0.5"
            strokeLinejoin="round"
            d="M31.32,12.12a4.47,4.47,0,1,1-4.47,4.47A4.47,4.47,0,0,1,31.32,12.12ZM20,21l7.22,7.22a.7.7,0,0,0,1,0l1.38-1.38a.71.71,0,0,1,1,0l7.81,7.81a.7.7,0,0,1-.5,1.2H10.08a.7.7,0,0,1-.58-1.1L19,21.13A.7.7,0,0,1,20,21Z"
          />
        </svg>
      </div>
      <div className={styles.projectName}>
        <p>GALERÍA</p>
      </div>
    </a>
  );
};

export default GalleryCard;
