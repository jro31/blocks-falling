import { useSelector } from 'react-redux';

import TopScore from '../../scoring/TopScore';
import MoveRightButton from '../../buttons/MoveRightButton';
import PauseButton from '../../buttons/PauseButton';
import RotateClockwiseButton from '../../buttons/RotateClockwiseButton';
import styles from './RightSidebar.module.css';
import KeyboardControls from './KeyboardControls';

const RightSidebar = () => {
  const topScore = useSelector(state => state.topScore.topScore);

  return (
    <div className={`sidebar ${styles['right-sidebar']}`}>
      <div className={styles['top-score-pause-container']}>
        {!topScore && <KeyboardControls />}
        {topScore > 0 && <TopScore />}
        <PauseButton className={!topScore ? styles['pause-button'] : ''} />
      </div>
      <div className={styles['buttons-container']}>
        <div className={styles['clockwise-button-container']}>
          <RotateClockwiseButton />
        </div>
        <div className={styles['move-right-button-container']}>
          <MoveRightButton />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
