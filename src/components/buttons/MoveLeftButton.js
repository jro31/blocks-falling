import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { left } from '../../store/game-board';
import styles from './MoveLeftButton.module.css';

const MoveLeftButton = () => {
  const moveBlock = useMoveBlock();

  return (
    <RoundButton onClick={() => moveBlock(left)}>
      <div className={styles.arrow}>&#10140;&#65038;</div>
    </RoundButton>
  );
};

export default MoveLeftButton;
