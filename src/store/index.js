import { configureStore } from '@reduxjs/toolkit';

import gameBoardReducer from './game-board';
import topScoreReducer from './top-score';

const store = configureStore({
  reducer: {
    gameBoard: gameBoardReducer,
    topScore: topScoreReducer,
  },
});

export default store;
