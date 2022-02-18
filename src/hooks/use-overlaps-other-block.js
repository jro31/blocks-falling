import { squaresRef } from '../components/GameBoard';
import { settled } from '../store/game-board';

const useOverlapsOtherBlock = () => {
  const overlapsOtherBlock = block => {
    let statusArray = [];

    Object.keys(block).forEach(rowKey =>
      Object.keys(block[rowKey]).forEach(columnKey => {
        statusArray.push(squaresRef.current[rowKey][columnKey].status);
      })
    );

    return statusArray.includes(settled);
  };

  return overlapsOtherBlock;
};

export default useOverlapsOtherBlock;
