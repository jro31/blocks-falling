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

  const uniqueRows = shape => {
    return Object.keys(shape).map(rowKey => parseInt(rowKey));
  };

  const allColumns = shape => {
    let columnsArray = [];
    Object.keys(shape).forEach(outerKey => columnsArray.push(Object.keys(shape[outerKey])));

    return columnsArray.flat().map(column => parseInt(column));
  };

  const uniqueColumns = shape => {
    return [...new Set(allColumns(shape))];
  };

  const columnAmountsObject = shape => {
    let columnAmounts = {};

    uniqueColumns(shape).forEach(
      column => (columnAmounts[column] = allColumns(shape).filter(x => x === column).length)
    );

    return columnAmounts;
  };

  const mostPopulatedColumn = shape => {
    return Object.keys(columnAmountsObject(shape)).find(
      columnKey =>
        columnAmountsObject(shape)[columnKey] ===
        Math.max(...Object.values(columnAmountsObject(shape)))
    );
  };

  const numberOfRows = shape => {
    return uniqueRows(shape).length;
  };

  const numberOfColumns = shape => {
    return Math.max(...uniqueColumns(shape)) - Math.min(...uniqueColumns(shape)) + 1;
  };

  const newShape = startingShape => {
    let returnObject = {};

    // console.log(uniqueRows(startingShape));
    // console.log(numberOfRows(startingShape));
    // console.log(uniqueColumns(startingShape));
    // console.log(numberOfColumns(startingShape));

    if (numberOfRows(startingShape) >= 3) {
      // TODO - Unfinished
      let pivotRow = uniqueRows(startingShape)[1];

      numberOfColumns(startingShape).forEach(
        (_, index) => (returnObject[pivotRow + (index - 1)] = {})
      );

      console.log(returnObject);
    } else if (numberOfColumns(startingShape) >= 3) {
      // let pivot = uniqueRows(startingShape)[1];

      // numberOfColumns(startingShape).forEach(
      //   (_, index) => (returnObject[pivot + (index - 1)] = {})
      // );

      // console.log(returnObject);
      console.log(mostPopulatedColumn(startingShape));
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
