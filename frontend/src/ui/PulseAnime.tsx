import styles from "./PulseAnime.module.css";

interface PulseAnimeProps {
  onClick: () => void;
}

export default function PulseAnime({ onClick }: PulseAnimeProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.hoop}>
        <a href="#" className={styles.hoop_circles}>
          <div
            className={`${styles.hoop_circle} ${styles.hoop_circle__1}`}
          ></div>
          <div
            className={`${styles.hoop_circle} ${styles.hoop_circle__2}`}
          ></div>
          <div
            className={`${styles.hoop_circle} ${styles.hoop_circle__3}`}
          ></div>
        </a>
      </div>
    </div>
  );
}
