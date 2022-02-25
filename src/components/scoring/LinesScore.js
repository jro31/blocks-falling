import { useSelector } from 'react-redux';

import Scoreboard from './Scoreboard';

const LinesScore = () => {
  const clearedRows = useSelector(state => state.gameBoard.clearedRows);

  return <Scoreboard name='Lines' alignRight score={clearedRows} />;
};

export default LinesScore;
