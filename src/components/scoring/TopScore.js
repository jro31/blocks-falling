import { useSelector } from 'react-redux';

import Scoreboard from './Scoreboard';

const TopScore = () => {
  const topScore = useSelector(state => state.topScore.topScore);

  return <Scoreboard name='Top score' score={topScore || 0} />;
};

export default TopScore;
