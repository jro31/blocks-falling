import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { right } from '../../store/game-board';

const MoveRightButton = () => {
  const moveBlock = useMoveBlock();

  return (
    <RoundButton onClick={() => moveBlock(right)}>
      <img src='/icons/right-arrow.svg' alt='R' />
    </RoundButton>
  );
};

export default MoveRightButton;
