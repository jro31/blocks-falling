import RoundButton from './RoundButton';
import useRotateBlock from '../../hooks/use-rotate-block';
import { clockwise } from '../../store/game-board';

const RotateClockwiseButton = () => {
  const rotateBlock = useRotateBlock();

  return (
    <RoundButton type='rotate' onClick={() => rotateBlock(clockwise)}>
      <div>&#8635;&#65038;</div>
    </RoundButton>
  );
};

export default RotateClockwiseButton;
