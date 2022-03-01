import RoundButton from './RoundButton';
import useRotateBlock from '../../hooks/use-rotate-block';
import { antiClockwise } from '../../store/game-board';

const RotateAntiClockwiseButton = () => {
  const rotateBlock = useRotateBlock();

  return (
    <RoundButton type='rotate' onClick={() => rotateBlock(antiClockwise)}>
      <div>&#8634;&#65038;</div>
    </RoundButton>
  );
};

export default RotateAntiClockwiseButton;
