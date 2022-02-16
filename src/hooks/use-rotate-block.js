import { squaresRef, statusRef } from '../components/GameBoard';
import { live, inProgress, empty } from '../store/game-board';

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

  const initialShapeGrid = () => {
    let returnObject = {};
    const gridSize = Math.max(numberOfRows(initialShape()), numberOfColumns(initialShape()));
    let lastRow;

    uniqueRows(initialShape()).forEach(outerKey => {
      if (!returnObject[outerKey]) returnObject[outerKey] = {};
      let lastColumn;
      uniqueColumns(initialShape()).forEach(innerKey => {
        if (initialShape()[outerKey] && initialShape()[outerKey][innerKey]) {
          returnObject[outerKey][innerKey] = initialShape()[outerKey][innerKey];
        } else {
          returnObject[outerKey][innerKey] = { status: empty, color: '' };
        }
        lastColumn = innerKey; // Update this
      });
      [...Array(gridSize - Object.keys(returnObject[outerKey]).length)].forEach(
        (_, index) =>
          (returnObject[outerKey][lastColumn + (index + 1)] = { status: empty, color: '' })
      );
      lastRow = outerKey; // Update this
    });

    [...Array(gridSize - Object.keys(returnObject).length)].forEach((_, index) => {
      returnObject[lastRow + (index + 1)] = {};
      uniqueColumns(initialShape()).forEach(innerKey => {
        returnObject[lastRow + (index + 1)][innerKey] = { status: empty, color: '' };
      });
    });

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

  const newShape = (startingShape, direction) => {
    let returnObject = {};

    // Take max of column/row amounts - This will be a grid
    // The top-left point of this grid will be the first row and first column
    // This point should be the start point of the new shape, noting that it won't necessarily be populated

    const gridSize = Math.max(numberOfRows(startingShape), numberOfColumns(startingShape));
    const gridTopLeft = [uniqueRows(startingShape)[0], uniqueColumns(startingShape)[0]];

    let grid = {};

    // First row should stay the same

    if (direction === 'clockwise') {
      Object.keys(startingShape).forEach(outerKey =>
        Object.keys(startingShape[outerKey]).forEach(innerKey => {
          // if (!returnObject[outerKey]) returnObject[outerKey] = {};
          if (!returnObject[outerKey][innerKey]) returnObject[outerKey][innerKey] = {};
        })
      );
    }

    // if (numberOfRows(startingShape) >= 3) {
    //   // TODO - Unfinished
    //   let pivotRow = uniqueRows(startingShape)[1];

    //   numberOfColumns(startingShape).forEach(
    //     (_, index) => (returnObject[pivotRow + (index - 1)] = {})
    //   );

    //   console.log(returnObject);
    // } else if (numberOfColumns(startingShape) >= 3) {
    //   const baseRow = uniqueRows(startingShape)[1];
    //   const baseColumn = mostPopulatedColumn(startingShape);
    // }

    // TODO
    // If three or four consecutive horizontal squares, pivot on the middle of these (for L, J, I and T when horizontal)
    // If three or four consecutive vertical squares, pivot on the middle of these (for L, J, I and T when vertical)
    // Otherwise (Z and S) pivot on one of the two centre squares
  };

  const rotateBlock = (direction = null) => {
    if (statusRef.current === inProgress) {
      console.log(initialShape());
      // newShape(initialShape(), 'clockwise');
      console.log(initialShapeGrid());
    }

    // Get the initial shape
    // From the initial shape, establish the new shape
    // Fit the new shape onto the grid, moving it down if at the very top, or moving it up if it doesn't fit with the surrounding settled blocks
  };

  return rotateBlock;
};

export default useRotateBlock;
