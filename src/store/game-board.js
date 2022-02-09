import { createSlice } from '@reduxjs/toolkit';

const gameBoardSlice = createSlice({
  name: 'game-board',
  initialState: {
    gameBoardStatus: 'INITIAL STATE',
  },
  reducers: {
    testReducer(state) {
      state.gameBoardStatus = 'THIS IS WORKING';
    },
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice.reducer;
