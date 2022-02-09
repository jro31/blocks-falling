import { createSlice } from '@reduxjs/toolkit';

const initialSquares = () => {
  // prettier-ignore
  return Array.from(new Array(20), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]= Array.from(new Array(10), (_, i) => i + 1).reduce((acc,curr)=> (acc[curr]={status: 'empty', color: ''}, acc), {}), acc),{})
};

const gameBoardSlice = createSlice({
  name: 'game-board',
  initialState: {
    squares: initialSquares(),
  },
  reducers: {
    testReducer(state) {
      state.gameBoardStatus = 'THIS IS WORKING';
    },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
