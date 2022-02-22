import { useDispatch, useSelector } from 'react-redux';
import GameBoard from './components/GameBoard';

import { gameBoardActions } from './store/game-board';

const App = () => {
  const dispatch = useDispatch();
  const GameBoardStatus = useSelector(state => state.gameBoard.gameBoardStatus);

  const testClickHandler = () => {
    dispatch(gameBoardActions.testReducer());
  };

  return <GameBoard />;
};

export default App;
