import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { down } from '../../store/game-board';

const MoveDownButton = () => {
  const moveBlock = useMoveBlock();

  // TODO - Make holding this button down work like holding the down key down on a keyboard
  // (Right now on mobile it tries to save the image, so you have to tap the button incessently... which is annoying)
  return (
    <RoundButton onClick={() => moveBlock(down)}>
      <img src='/icons/down-arrow.svg' alt='D' />
    </RoundButton>
  );
};

export default MoveDownButton;
