import { configureStore } from '@reduxjs/toolkit';

import gameBoardReducer from './game-board';

const store = configureStore({
  reducer: {
    gameBoard: gameBoardReducer,
  },
});

export default store;
