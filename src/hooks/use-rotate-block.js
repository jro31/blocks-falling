import { squaresRef, statusRef } from '../components/GameBoard';
import { live, inProgress } from '../store/game-board';

const useRotateBlock = () => {
  const initialShape = () => {
    let returnObject = {};

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          if (!returnObject[outerKey]) returnObject[outerKey] = {};
          if (!returnObject[outerKey][innerKey]) returnObject[outerKey][innerKey] = {};
          returnObject[outerKey][innerKey].status = live;
          returnObject[outerKey][innerKey].color = squaresRef.current[outerKey][innerKey].color;
        }
      })
    );

    return returnObject;
  };

  const numberOfRows = shape => {
    return Object.keys(shape).length;
  };

  const numberOfColumns = shape => {
    let columnsArray = [];
    Object.keys(shape).forEach(outerKey => columnsArray.push(Object.keys(shape[outerKey])));
    let uniqueColumns = [...new Set(columnsArray.flat().map(columnKey => parseInt(columnKey)))];

    return Math.max(...uniqueColumns) - Math.min(...uniqueColumns) + 1;
  };

  const newShape = startingShape => {
    console.log(numberOfColumns(startingShape));

    let returnObject = {};

    if (numberOfRows(startingShape) >= 3) {
      // TODO
    } else if (numberOfColumns(startingShape) >= 3) {
      // TODO
    }

    // TODO
    // If three or four consecutive horizontal squares, pivot on the middle of these (for L, J, I and T when horizontal)
    // If three or four consecutive vertical squares, pivot on the middle of these (for L, J, I and T when vertical)
    // Otherwise (Z and S) pivot on one of the two centre squares
  };

  const rotateBlock = (direction = null) => {
    if (statusRef.current === inProgress) {
      // console.log(initialShape());
      newShape(initialShape());
    }

    // Get the initial shape
    // From the initial shape, establish the new shape
    // Fit the new shape onto the grid, moving it down if at the very top, or moving it up if it doesn't fit with the surrounding settled blocks
  };

  return rotateBlock;
};

export default useRotateBlock;
