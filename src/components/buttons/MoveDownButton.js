import { useEffect, useRef, useState } from 'react';

import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { down } from '../../store/game-board';

const MoveDownButton = () => {
  const [buttonIsPressed, setButtonIsPressed] = useState(false);
  const moveBlock = useMoveBlock();

  let buttonIsPressedRef = useRef(buttonIsPressed);
  buttonIsPressedRef.current = buttonIsPressed;

  const buttonClickHandler = () => {
    moveBlock(down);
  };

  const buttonTouchEnd = event => {
    event.preventDefault();
    setButtonIsPressed(false);
  };

  useEffect(() => {
    let timeOut;

    const startMoveDownTimer = () => {
      if (!buttonIsPressedRef.current) return;

      timeOut = setTimeout(() => {
        moveBlock(down);
        startMoveDownTimer();
      }, 50);
    };

    if (buttonIsPressedRef.current) {
      startMoveDownTimer();
    } else {
      clearTimeout(timeOut);
    }
  }, [buttonIsPressed, moveBlock]);

  return (
    <RoundButton
      onTouchStart={() => setButtonIsPressed(true)}
      onTouchEnd={buttonTouchEnd}
      onClick={buttonClickHandler}
    >
      <div>&#8675;&#65038;</div>
    </RoundButton>
  );
};

export default MoveDownButton;
