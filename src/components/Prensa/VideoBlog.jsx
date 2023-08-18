import "./Card.css";
import styles from "./Prensa.module.css";

const VideoBlog = () => {
  return (
    <a href="#" className="card wallet">
      <div className="overlay"></div>
      <div className="circle">
        <svg
          width="80px"
          height="88px"
          fill="#6A5297"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            className="a"
            fill="none"
            stroke="#6A5297"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
            d="M43.1124,14.394a5.0056,5.0056,0,0,0-3.5332-3.5332c-2.3145-.8936-24.7326-1.3314-31.2358.0256A5.0059,5.0059,0,0,0,4.81,14.42c-1.0446,4.583-1.1239,14.4914.0256,19.1767A5.006,5.006,0,0,0,8.369,37.13c4.5829,1.0548,26.3712,1.2033,31.2358,0a5.0057,5.0057,0,0,0,3.5332-3.5333C44.2518,28.6037,44.3311,19.31,43.1124,14.394Z"
          />
          <path
            fill="#6A5297"
            className="a"
            d="M30.5669,23.9952,20.1208,18.004V29.9863Z"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className={styles.projectName}>
        <p>VIDEO BLOG</p>
      </div>
    </a>
  );
};

export default VideoBlog;
