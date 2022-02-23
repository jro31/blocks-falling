import styles from './MobileScoreBoard.module.css';

const MobileScoreBoard = () => {
  return (
    <div className={styles['mobile-scoreboard']}>
      <div className={styles['rows-score']}>Row score</div>
      <div className={styles['top-score-pause-container']}>
        <div className={styles['top-score']}>Top score</div>
        <div className={styles['pause-button']}>Pause button</div>
      </div>
    </div>
  );
};

export default MobileScoreBoard;
