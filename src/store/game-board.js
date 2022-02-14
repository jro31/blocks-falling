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
    timerIsLive: false,
  },
  reducers: {
    nextBlock(state) {
      state.liveBlock = blocks[Math.floor(Math.random() * blocks.length)];
      if ((state.blockCounter + 1) % 10 === 0) state.speed = state.speed * 0.75;
      state.blockCounter = state.blockCounter + 1;
      state.squares = mergeNestedObjects(current(state.squares), newBlockO());
      state.timerIsLive = true;
    },
    updateGameBoard(state, action) {
      state.squares = action.payload;
    },
    startTimer(state) {
      state.timerIsLive = true;
    },
    stopTimer(state) {
      state.timerIsLive = false;
    },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
