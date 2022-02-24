import MoveLeftButton from '../../buttons/MoveLeftButton';
import RotateAntiClockwiseButton from '../../buttons/RotateAntiClockwiseButton';
import styles from './LeftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={`sidebar ${styles['left-sidebar']}`}>
      <div className={styles['score-container']}>Current score</div>
      <div className={styles['buttons-container']}>
        <RotateAntiClockwiseButton />
        <MoveLeftButton />
      </div>
    </div>
  );
};

export default LeftSidebar;
