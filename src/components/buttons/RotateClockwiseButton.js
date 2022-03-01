import RoundButton from './RoundButton';
import useRotateBlock from '../../hooks/use-rotate-block';
import { clockwise } from '../../store/game-board';

const RotateClockwiseButton = () => {
  const rotateBlock = useRotateBlock();

  return (
    <RoundButton onClick={() => rotateBlock(clockwise)}>
      {/* <img src='/icons/rotate-clockwise-arrow.svg' alt='X' /> */}
      <div>&#8635;&#65038;</div>
    </RoundButton>
  );
};

export default RotateClockwiseButton;
