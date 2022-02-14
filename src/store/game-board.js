import { createSlice, current } from '@reduxjs/toolkit';

const initialSquares = () => {
  // prettier-ignore
  return Array.from(new Array(20), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]= Array.from(new Array(10), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]={status: 'empty', color: ''}, acc), {}), acc),{})
};

export const blocks = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

const blockObject = (status, color) => {
  return {
    status: status,
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
  const blockI = blockObject('live', 'red');

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
  const blockJ = blockObject('live', 'gold');

  return {
    1: {
      4: blockJ,
    },
    2: {
      4: blockJ,
      5: blockJ,
      6: blockJ,
    },
  };
};

const newBlockL = () => {
  const blockL = blockObject('live', 'blue');

  return {
    1: {
      6: blockL,
    },
    2: {
      4: blockL,
      5: blockL,
      6: blockL,
    },
  };
};

const newBlockO = () => {
  const blockO = blockObject('live', 'green');

  return {
    1: {
      5: blockO,
      6: blockO,
    },
    2: {
      5: blockO,
      6: blockO,
    },
  };
};

const newBlockS = () => {
  const blockS = blockObject('live', 'chocolate');

  return {
    1: {
      5: blockS,
      6: blockS,
    },
    2: {
      4: blockS,
      5: blockS,
    },
  };
};

const newBlockT = () => {
  const blockT = blockObject('live', 'orange');

  return {
    1: {
      5: blockT,
    },
    2: {
      4: blockT,
      5: blockT,
      6: blockT,
    },
  };
};

const newBlockZ = () => {
  const blockZ = blockObject('live', 'fuchsia');

  return {
    1: {
      4: blockZ,
      5: blockZ,
    },
    2: {
      5: blockZ,
      6: blockZ,
    },
  };
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

const gameBoardSlice = createSlice({
  name: 'game-board',
  initialState: {
    squares: initialSquares(),
    speed: 1000,
    liveBlock: blocks[Math.floor(Math.random() * blocks.length)],
    blockCounter: 0,
    timer: { isLive: true },
    // downTimeRemaining: null,
  },
  reducers: {
    nextBlock(state) {
      let newBlock = blocks[Math.floor(Math.random() * blocks.length)];

      state.liveBlock = newBlock;
      if ((state.blockCounter + 1) % 10 === 0) state.speed = state.speed * 0.75;
      state.blockCounter = state.blockCounter + 1;
      state.squares = mergeNestedObjects(current(state.squares), newBlockShape(newBlock));
      state.timerIsLive = true;
    },
    updateGameBoard(state, action) {
      state.squares = action.payload;
    },
    startTimer(state) {
      state.timer = { isLive: true };
      // state.downTimeRemaining = null;
    },
    stopTimer(state) {
      state.timer = { isLive: false };
    },
    // setDownTimeRemaining(state, action) {
    //   state.downTimeRemaining = action.payload;
    // },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
