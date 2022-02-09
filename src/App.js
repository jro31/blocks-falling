import { useDispatch, useSelector } from 'react-redux';

import { gameBoardActions } from './store/game-board';

const App = () => {
  const dispatch = useDispatch();
  const GameBoardStatus = useSelector(state => state.gameBoard.gameBoardStatus);

  const testClickHandler = () => {
    dispatch(gameBoardActions.testReducer());
  };

  return <div onClick={testClickHandler}>{GameBoardStatus}</div>;
};

export default App;
