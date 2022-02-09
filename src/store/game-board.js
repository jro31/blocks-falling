import { createSlice } from '@reduxjs/toolkit';

const initialSquares = () => {
  // prettier-ignore
  return Array.from(new Array(20), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]= Array.from(new Array(10), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]={status: 'empty', color: ''}, acc), {}), acc),{})
};

export const blocks = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

const newBlockO = () => {
  const blockObject = { status: 'live', color: 'green' };

  return {
    1: {
      5: blockObject,
      6: blockObject,
    },
    2: {
      5: blockObject,
      6: blockObject,
    },
  };
};

const mergeNestedObjects = (existingObject, newObject) => {
  let returnObject = { ...existingObject };
  let outerKeys = Object.keys(newObject);

  outerKeys.forEach(outerKey =>
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
  },
  reducers: {
    nextBlock(state, action) {
      state.liveBlock = action.payload;
      if ((state.blockCounter + 1) % 10 === 0) state.speed = state.speed * 0.75;
      state.blockCounter = state.blockCounter + 1;
      state.squares = mergeNestedObjects(state.squares, newBlockO());
    },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
