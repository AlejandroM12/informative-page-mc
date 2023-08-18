import styles from "./Video.module.css";

const VideoSeccion = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoResponsive}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n9JiFUyx8LU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSeccion;
