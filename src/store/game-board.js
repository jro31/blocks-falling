import { createSlice } from '@reduxjs/toolkit';

const gameBoardSlice = createSlice({
  name: 'game-board',
  initialState: {
    gameBoardStatus: Array.from(new Array(20), (_, i) => i + 1).map(_ =>
      Array.from(new Array(10), (_, n) => n + 1).map(_ => ['empty', ''])
    ),
  },
  reducers: {
    testReducer(state) {
      state.gameBoardStatus = 'THIS IS WORKING';
    },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
