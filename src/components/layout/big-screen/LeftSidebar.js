import MoveDownButton from '../../buttons/MoveDownButton';
import MoveLeftButton from '../../buttons/MoveLeftButton';
import RotateAntiClockwiseButton from '../../buttons/RotateAntiClockwiseButton';
import LinesScore from '../../scoring/LinesScore';
import styles from './LeftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={`sidebar ${styles['left-sidebar']}`}>
      <div className={styles['score-container']}>
        <LinesScore />
      </div>
      <div className={styles['buttons-container']}>
        <div className={styles['down-button-container']}>
          <MoveDownButton />
        </div>
        <div className={styles['anti-clockwise-button-container']}>
          <RotateAntiClockwiseButton />
        </div>
        <div className={styles['move-left-button-container']}>
          <MoveLeftButton />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
