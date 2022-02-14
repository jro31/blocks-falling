import { useDispatch, useSelector } from 'react-redux';

import useCanMoveBlock from './use-can-move-block';
import { gameBoardActions } from '../store/game-board';

const useMoveBlock = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);
  const canMove = useCanMoveBlock();

  const down = () => {
    if (!canMove('down')) return;

    dispatch(gameBoardActions.stopTimer());

    let newObject = JSON.parse(JSON.stringify(squares));

    Object.keys(squares)
      .reverse()
      .forEach(outerKey =>
        Object.keys(squares[outerKey]).forEach(innerKey => {
          if (squares[outerKey][innerKey].status === 'live') {
            newObject[outerKey][innerKey] = { status: 'empty', color: '' };
            newObject[parseInt(outerKey) + 1][innerKey] = { status: 'live', color: 'green' };
          }
        })
      );

    dispatch(gameBoardActions.updateGameBoard(newObject));
    dispatch(gameBoardActions.startTimer());
  };

  const left = () => {
    if (!canMove('left')) return;

    let newObject = JSON.parse(JSON.stringify(squares));

    Object.keys(squares).forEach(outerKey =>
      Object.keys(squares[outerKey]).forEach(innerKey => {
        if (squares[outerKey][innerKey].status === 'live') {
          newObject[outerKey][innerKey] = { status: 'empty', color: '' };
          newObject[outerKey][parseInt(innerKey) - 1] = { status: 'live', color: 'green' };
        }
      })
    );

    dispatch(gameBoardActions.updateGameBoard(newObject));
  };

  const right = () => {
    if (!canMove('right')) return;

    let newObject = JSON.parse(JSON.stringify(squares));

    Object.keys(squares).forEach(outerKey =>
      Object.keys(squares[outerKey])
        .reverse()
        .forEach(innerKey => {
          if (squares[outerKey][innerKey].status === 'live') {
            newObject[outerKey][innerKey] = { status: 'empty', color: '' };
            newObject[outerKey][parseInt(innerKey) + 1] = { status: 'live', color: 'green' };
          }
        })
    );

    dispatch(gameBoardActions.updateGameBoard(newObject));
  };

  const moveBlock = direction => {
    switch (direction) {
      case 'down':
        down();
        break;
      case 'left':
        left();
        break;
      case 'right':
        right();
        break;
      default:
        return;
    }
  };

  return moveBlock;
};

export default useMoveBlock;
