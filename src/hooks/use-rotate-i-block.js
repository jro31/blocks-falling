import { iColor, live } from '../store/game-board';

const useRotateIBlock = () => {
  const rotateIBlock = initialShape => {
    const position = () => (Object.keys(initialShape).length === 1 ? 'horizontal' : 'vertical');
    let returnBlock = {};

    if (position() === 'horizontal') {
      const firstRow = parseInt(Object.keys(initialShape)[0]) - 1;
      const newColumn = parseInt(Object.keys(initialShape[Object.keys(initialShape)[0]])[1]);

      [...Array(4)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        returnBlock[firstRow + index][newColumn] = { status: live, color: iColor };
      });
    } else {
    }

    console.log(returnBlock);

    return returnBlock;
  };

  return rotateIBlock;
};

export default useRotateIBlock;
