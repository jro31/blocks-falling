import { createSlice, current } from '@reduxjs/toolkit';

export const preGame = 'pre-game';
export const inProgress = 'in-progress';
export const paused = 'paused';
export const gameOver = 'game-over';

export const live = 'live';
export const dead = 'dead';
export const settled = 'settled';
export const empty = 'empty';

export const iColor = 'red';

// prettier-ignore
const initialSquares = () => {
  const returnObject = Array.from(new Array(20), (_, i) => i + 1).reduce((acc, curr) => (acc[curr] = Array.from(new Array(10), (_, i) => i + 1).reduce((acc, curr) => (acc[curr] = { status: empty, color: '' }, acc), {}), acc),{})
  returnObject[0] = Array.from(new Array(10), (_, i) => i + 1).reduce((acc, curr) => ((acc[curr] = { status: dead, color: '' }), acc), {});
  return returnObject;
};

export const blocks = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

const blockObject = color => {
  return {
    status: live,
    color: color,
  };
};

const newBlockShape = block => {
  switch (block) {
    case 'I':
      return newBlockI();
    case 'J':
      return newBlockJ();
    case 'L':
      return newBlockL();
    case 'O':
      return newBlockO();
    case 'S':
      return newBlockS();
    case 'T':
      return newBlockT();
    case 'Z':
      return newBlockZ();
    default:
      return newBlockO();
  }
};

const newBlockI = () => {
  const blockI = blockObject(iColor);

  return {
    1: {
      4: blockI,
      5: blockI,
      6: blockI,
      7: blockI,
    },
  };
};

const newBlockJ = () => {
  const blockJ = blockObject('gold');

  return {
    0: {
      4: blockJ,
    },
    1: {
      4: blockJ,
      5: blockJ,
      6: blockJ,
    },
  };
};

const newBlockL = () => {
  const blockL = blockObject('blue');

  return {
    0: {
      6: blockL,
    },
    1: {
      4: blockL,
      5: blockL,
      6: blockL,
    },
  };
};

const newBlockO = () => {
  const blockO = blockObject('green');

  return {
    0: {
      5: blockO,
      6: blockO,
    },
    1: {
      5: blockO,
      6: blockO,
    },
  };
};

const newBlockS = () => {
  const blockS = blockObject('chocolate');

  return {
    0: {
      5: blockS,
      6: blockS,
    },
    1: {
      4: blockS,
      5: blockS,
    },
  };
};

const newBlockT = () => {
  const blockT = blockObject('orange');

  return {
    0: {
      5: blockT,
    },
    1: {
      4: blockT,
      5: blockT,
      6: blockT,
    },
  };
};

const newBlockZ = () => {
  const blockZ = blockObject('fuchsia');

  return {
    0: {
      4: blockZ,
      5: blockZ,
    },
    1: {
      5: blockZ,
      6: blockZ,
    },
  };
};

// prettier-ignore
const canAddBlock = (nextBlock, currentGrid) => {
  if (Object.keys(currentGrid[0]).map(square => currentGrid[0][square].status).includes(settled)) return false
  if (Object.keys(nextBlock[1]).map(square => currentGrid[1][square].status).includes(settled)) return false
  return true
};

const mergeNestedObjects = (existingObject, newObject) => {
  let returnObject = { ...existingObject };

  Object.keys(newObject).forEach(outerKey =>
    Object.keys(newObject[outerKey]).forEach(
      innerKey =>
        (returnObject = {
          ...returnObject,
          [outerKey]: { ...returnObject[outerKey], [innerKey]: newObject[outerKey][innerKey] },
        })
    )
  );

  return returnObject;
};

const initialState = {
  squares: initialSquares(),
  speed: 1000,
  liveBlock: blocks[Math.floor(Math.random() * blocks.length)],
  blockCounter: 0,
  timer: { isLive: true },
  status: preGame,
};

const gameBoardSlice = createSlice({
  name: 'game-board',
  initialState,
  reducers: {
    nextBlock(state) {
      // let newBlock = blocks[Math.floor(Math.random() * blocks.length)];
      let newBlock = 'I'; // TODO - Change this back again

      state.liveBlock = newBlock;
      if ((state.blockCounter + 1) % 10 === 0) state.speed = state.speed * 0.75;
      state.blockCounter = state.blockCounter + 1;

      if (canAddBlock(newBlockShape(newBlock), current(state.squares))) {
        state.squares = mergeNestedObjects(current(state.squares), newBlockShape(newBlock));
        state.timer = { isLive: true };
      } else {
        state.status = gameOver;
      }
    },
    updateGameBoard(state, action) {
      state.squares = action.payload;
    },
    startTimer(state) {
      state.timer = { isLive: true };
    },
    stopTimer(state) {
      state.timer = { isLive: false };
    },
    startGame(state) {
      state.squares = initialState.squares;
      state.status = inProgress;
    },
    pauseGame(state) {
      state.status = paused;
    },
    resumeGame(state) {
      state.status = inProgress;
    },
    finishGame(state) {
      state.status = gameOver;
    },
    resetGame: () => initialState,
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
