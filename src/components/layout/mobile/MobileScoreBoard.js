import PauseButton from '../../buttons/PauseButton';
import RowsScore from '../../scoring/RowsScore';
import TopScore from '../../scoring/TopScore';

import styles from './MobileScoreBoard.module.css';

const MobileScoreBoard = () => {
  return (
    <div className={styles['mobile-scoreboard']}>
      <RowsScore />
      <div className={styles['top-score-pause-container']}>
        <TopScore />
        <PauseButton />
      </div>
    </div>
  );
};

export default MobileScoreBoard;
