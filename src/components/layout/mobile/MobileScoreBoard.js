import PauseButton from '../../buttons/PauseButton';
import LinesScore from '../../scoring/LinesScore';
import TopScore from '../../scoring/TopScore';

import styles from './MobileScoreBoard.module.css';

const MobileScoreBoard = () => {
  return (
    <div className={styles['mobile-scoreboard']}>
      <LinesScore />
      <div className={styles['pause-button-container']}>
        <PauseButton />
      </div>
      <TopScore />
    </div>
  );
};

export default MobileScoreBoard;
