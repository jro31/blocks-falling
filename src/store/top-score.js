import { createSlice } from '@reduxjs/toolkit';

const topScoreSlice = createSlice({
  name: 'top-score',
  initialState: {
    topScore: 0,
  },
  reducers: {
    setTopScore(state, action) {
      state.topScore = action.payload;
    },
  },
});

export const topScoreActions = topScoreSlice.actions;

export default topScoreSlice.reducer;
