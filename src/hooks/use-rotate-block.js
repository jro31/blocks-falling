import { useDispatch } from 'react-redux';

import { squaresRef, statusRef, liveBlockRef } from '../components/GameBoard';
import { live, inProgress, empty, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();

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

  const newGameBoard = rotatedBlock => {
    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey]).forEach(innerKey => {
        if (existingObject[outerKey][innerKey].status === live) {
          newObject[outerKey][innerKey] = { status: empty, color: '' };
        }
        // TODO - Handle the new block not fitting
        if (rotatedBlock[outerKey] && rotatedBlock[outerKey][innerKey]) {
          newObject[outerKey][innerKey] = { ...rotatedBlock[outerKey][innerKey] };
        }
      })
    );

    return newObject;
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

  const numberOfRows = shape => {
    return uniqueRows(shape).length;
  };

  const numberOfColumns = shape => {
    return Math.max(...uniqueColumns(shape)) - Math.min(...uniqueColumns(shape)) + 1;
  };

  const rotateBlock = (direction = null) => {
    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I') {
        dispatch(gameBoardActions.updateGameBoard(newGameBoard(rotateIBlock(initialShape()))));
      }

      // newGameBoard(direction);
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
