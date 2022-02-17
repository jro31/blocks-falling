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

  // TODO - Refactor
  const initialShapeGrid = () => {
    let shape = initialShape();
    let returnObject = {};
    const gridSize = Math.max(numberOfRows(shape), numberOfColumns(shape));
    let lastRow;
    let lastColumn;

    uniqueRows(shape).forEach(outerKey => {
      if (!returnObject[outerKey]) returnObject[outerKey] = {};
      uniqueColumns(shape).forEach(innerKey => {
        if (shape[outerKey] && shape[outerKey][innerKey]) {
          returnObject[outerKey][innerKey] = shape[outerKey][innerKey];
        } else {
          returnObject[outerKey][innerKey] = { status: empty, color: '' };
        }
        if (innerKey === uniqueColumns(shape)[uniqueColumns(shape).length - 1]) {
          lastColumn = innerKey;
        }
      });
      [...Array(gridSize - Object.keys(returnObject[outerKey]).length)].forEach(
        (_, index) =>
          (returnObject[outerKey][lastColumn + (index + 1)] = { status: empty, color: '' })
      );
      if (outerKey === uniqueRows(shape)[uniqueRows(shape).length - 1]) lastRow = outerKey;
    });

    [...Array(gridSize - Object.keys(returnObject).length)].forEach((_, index) => {
      returnObject[lastRow + (index + 1)] = {};
      uniqueColumns(shape).forEach(innerKey => {
        returnObject[lastRow + (index + 1)][innerKey] = { status: empty, color: '' };
      });
    });

    return returnObject;
  };

  // prettier-ignore
  const rotateClockwise = () => {
    const grid = initialShapeGrid();
    const gridSize = Object.keys(grid).length;
    const startingRow = parseInt(Object.keys(grid)[0]);
    const startingColumn = parseInt(Object.keys(grid[startingRow])[0]);
    const startingDifference = startingRow - startingColumn
    let returnObject = {};
    let adjustedStartingRow
    let adjustedStartingColumn

    Array.from({ length: gridSize }, (_, i) => i + startingRow).forEach((rowKey, rowIndex) => {
      returnObject[rowKey] = {};
      Array.from({ length: gridSize }, (_, i) => i + startingColumn).forEach((columnKey, columnIndex) => {
        returnObject[rowKey][columnKey] = {};
        adjustedStartingRow = rowIndex + 1
        adjustedStartingColumn = columnIndex + 1

        if (gridSize === 3) {
          returnObject[rowKey][columnKey] = { ...grid[(adjustedStartingRow - ((adjustedStartingRow - (gridSize - 1)) + (adjustedStartingColumn - (gridSize - 1)))) + (startingRow - 1)][(adjustedStartingColumn - (adjustedStartingColumn - adjustedStartingRow)) + (startingColumn - 1)] }
        } else if (gridSize === 4) {
          returnObject[rowKey][columnKey] = { ...grid[rotationMatrix(adjustedStartingColumn) + (startingRow - 1)][rowKey - startingDifference] }
        }
      });
    });

    return returnObject;
  };

  const rotationMatrix = number => {
    switch (number) {
      case 1:
        return 4;
      case 2:
        return 3;
      case 3:
        return 2;
      case 4:
        return 1;
      default:
        throw new Error('Invalid number passed to rotation matrix');
    }
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
      // console.log(initialShapeGrid());
      console.log(rotateClockwise());
    }

    // Get the initial shape
    // From the initial shape, establish the new shape
    // Fit the new shape onto the grid, moving it down if at the very top, or moving it up if it doesn't fit with the surrounding settled blocks
  };

  return rotateBlock;
};

export default useRotateBlock;
