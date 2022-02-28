import MoveDownButton from '../../buttons/MoveDownButton';
import MoveLeftButton from '../../buttons/MoveLeftButton';
import MoveRightButton from '../../buttons/MoveRightButton';
import RotateAntiClockwiseButton from '../../buttons/RotateAntiClockwiseButton';
import RotateClockwiseButton from '../../buttons/RotateClockwiseButton';
import styles from './MobileButtons.module.css';

const MobileButtons = () => {
  return (
    <div className={styles['mobile-buttons-container']}>
      <RotateAntiClockwiseButton />
      <MoveLeftButton />
      <MoveDownButton />
      <MoveRightButton />
      <RotateClockwiseButton />
    </div>
  );
};

export default MobileButtons;
