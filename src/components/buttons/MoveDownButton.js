import { useEffect, useRef, useState } from 'react';

import RoundButton from './RoundButton';
import useMoveBlock from '../../hooks/use-move-block';
import { down } from '../../store/game-board';

const MoveDownButton = () => {
  const [buttonIsPressed, setButtonIsPressed] = useState(false);
  const moveBlock = useMoveBlock();

  let buttonIsPressedRef = useRef(buttonIsPressed);
  buttonIsPressedRef.current = buttonIsPressed;

  // let interval;

  // const buttonTouchStartHandler = event => {
  //   setButtonIsPressed(true);

  //   console.log('touch-start');
  //   console.log(interval);

  //   event.preventDefault();

  //   moveBlock(down);

  //   interval = setInterval(() => {
  //     moveBlock(down);
  //   }, 99);
  //   console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
  //   console.log(interval);
  // };

  // const buttonTouchEndHandler = event => {
  //   setButtonIsPressed(false);

  //   console.log('touch-end');
  //   console.log(interval);

  //   event.preventDefault();

  //   clearInterval(interval);

  //   console.log(interval);
  // };

  // const buttonPressHandler = () => {
  //   let timeOut;

  //   if (buttonIsPressed) {
  //     timeOut = setTimeout(() => {
  //       moveBlock(down);
  //     }, 99);

  //     // timeOut = setTimeout(() => {
  //     //   moveBlock(down);
  //     // }, speed);
  //   } else {
  //     clearTimeout(timeOut);
  //   }
  // };

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
      <img src='/icons/down-arrow.svg' alt='D' />
    </RoundButton>
  );
};

export default MoveDownButton;
