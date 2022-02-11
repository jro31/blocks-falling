import { useDispatch, useSelector } from 'react-redux';

import { gameBoardActions } from '../store/game-board';

const useMoveBlock = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);

  const down = () => {
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
  };

  const moveBlock = direction => {
    switch (direction) {
      case 'down':
        return down();
      default:
        return;
    }
  };

  return moveBlock;
};

export default useMoveBlock;
