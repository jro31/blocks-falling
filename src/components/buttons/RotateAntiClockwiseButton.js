import RoundButton from './RoundButton';
import useRotateBlock from '../../hooks/use-rotate-block';
import { antiClockwise } from '../../store/game-board';

const RotateAntiClockwiseButton = () => {
  const rotateBlock = useRotateBlock();

  return (
    <RoundButton onClick={() => rotateBlock(antiClockwise)}>
      <img src='/icons/rotate-anti-clockwise-arrow.svg' alt='X' />
    </RoundButton>
  );
};

export default RotateAntiClockwiseButton;
