import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { down } from '../../store/game-board';

const MoveDownButton = () => {
  const moveBlock = useMoveBlock();

  return (
    <RoundButton onClick={() => moveBlock(down)}>
      <img src='/icons/down-arrow.svg' alt='D' />
    </RoundButton>
  );
};

export default MoveDownButton;
