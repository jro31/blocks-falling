import useOffsetForTopOfGameBoard from './use-offset-for-top-of-game-board';
import useOffsetForBottomOfGameBoard from './use-offset-for-bottom-of-game-board';
import useOffsetForLeftOfGameBoard from './use-offset-for-left-of-game-board';
import useOffsetForRightOfGameBoard from './use-offset-for-right-of-game-board';

import { squaresRef } from '../components/GameBoard';
import { iColor, live } from '../store/game-board';

const useRotateIBlock = () => {
  const offsetForTopOfGameBoard = useOffsetForTopOfGameBoard();
  const offsetForBottomOfGameBoard = useOffsetForBottomOfGameBoard();
  const offsetForLeftOfGameBoard = useOffsetForLeftOfGameBoard();
  const offsetForRightOfGameBoard = useOffsetForRightOfGameBoard();

  const currentGameBoard = squaresRef.current;

  let returnBlock = {};

  const offsetForGameBoard = () => {
    offsetForTopOfGameBoard(returnBlock);
    offsetForBottomOfGameBoard(returnBlock);
    offsetForLeftOfGameBoard(returnBlock);
    offsetForRightOfGameBoard(returnBlock);
  };

  const offsetForOtherBlocks = () => {
    // TODO
  };

  const offsetPosition = () => {
    offsetForGameBoard();
    offsetForOtherBlocks();
  };

  const rotateIBlock = initialShape => {
    returnBlock = {};
    const position = () => (Object.keys(initialShape).length === 1 ? 'horizontal' : 'vertical');

    if (position() === 'horizontal') {
      const firstRow = parseInt(Object.keys(initialShape)[0]) - 1;
      const newColumn = parseInt(Object.keys(initialShape[Object.keys(initialShape)[0]])[1]);

      [...Array(4)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        returnBlock[firstRow + index][newColumn] = { status: live, color: iColor };
      });
    } else {
      const newRow = parseInt(Object.keys(initialShape)[1]);
      const firstColumn = parseInt(Object.keys(initialShape[Object.keys(initialShape)[0]])[0]) - 1;

      returnBlock[newRow] = {};

      [...Array(4)].forEach((_, index) => {
        returnBlock[newRow][firstColumn + index] = { status: live, color: iColor };
      });
    }

    offsetPosition();

    // console.log(returnBlock);

    return returnBlock;
  };

  return rotateIBlock;
};

export default useRotateIBlock;
