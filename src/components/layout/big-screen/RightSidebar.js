import TopScore from '../../scoring/TopScore';
import MoveRightButton from '../../buttons/MoveRightButton';
import PauseButton from '../../buttons/PauseButton';
import RotateClockwiseButton from '../../buttons/RotateClockwiseButton';
import styles from './RightSidebar.module.css';

const RightSidebar = () => {
  return (
    <div className={`sidebar ${styles['right-sidebar']}`}>
      <div className={styles['top-score-pause-container']}>
        <TopScore />
        <PauseButton />
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
