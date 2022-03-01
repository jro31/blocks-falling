import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { right } from '../../store/game-board';

const MoveRightButton = () => {
  const moveBlock = useMoveBlock();

  return (
    <RoundButton onClick={() => moveBlock(right)}>
      <div>&#10140;&#65038;</div>
    </RoundButton>
  );
};

export default MoveRightButton;
