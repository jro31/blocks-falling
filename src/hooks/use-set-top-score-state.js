import { useDispatch } from 'react-redux';

import { topScoreActions } from '../store/top-score';

const useSetTopScoreState = () => {
  const dispatch = useDispatch();

  const setTopScoreState = score => {
    dispatch(topScoreActions.setTopScore(score));
  };

  return setTopScoreState;
};

export default useSetTopScoreState;
