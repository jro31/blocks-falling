import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { gameOver } from '../../store/game-board';
import Scoreboard from './Scoreboard';

const TopScore = () => {
  const status = useSelector(state => state.gameBoard.status);
  const clearedRows = useSelector(state => state.gameBoard.clearedRows);
  const [topScore, setTopScore] = useState(localStorage.getItem('tetris.top-score'));

  useEffect(() => {
    if (status === gameOver) {
      if ((topScore && clearedRows > topScore) || !topScore) {
        setTopScore(clearedRows);
        localStorage.setItem('tetris.top-score', clearedRows);
      }
    }
  }, [status]);

  return <Scoreboard name='Top score' score={topScore || 0} />;
};

export default TopScore;
