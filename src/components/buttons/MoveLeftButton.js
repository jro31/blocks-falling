import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';

const MoveLeftButton = () => {
  const moveBlock = useMoveBlock();

  return (
    <RoundButton onClick={() => moveBlock('left')}>
      <img src='/icons/left-arrow.svg' alt='L' />
    </RoundButton>
  );
};

export default MoveLeftButton;
