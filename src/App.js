// TODO - Add some kind of animation for clearing a completed row
// TODO - Make gameboard fit on mobile - namely iPhone 12 Mini in landscape (probably just need to make the buttons a bit smaller)

import { useSelector } from 'react-redux';

import { gameOver } from './store/game-board';
import LeftSidebar from './components/layout/big-screen/LeftSidebar';
import MobileScoreBoard from './components/layout/mobile/MobileScoreBoard';
import GameBoard from './components/GameBoard';
import MobileButtons from './components/layout/mobile/MobileButtons';
import RightSidebar from './components/layout/big-screen/RightSidebar';
import useSetTopScoreState from './hooks/use-set-top-score-state';

import styles from './App.module.css';
import { useEffect } from 'react';

const App = () => {
  const backgroundOne = useSelector(state => state.gameBoard.backgroundOne);
  const backgroundTwo = useSelector(state => state.gameBoard.backgroundTwo);
  const liveBackground = useSelector(state => state.gameBoard.liveBackground);

  const status = useSelector(state => state.gameBoard.status);
  const clearedRows = useSelector(state => state.gameBoard.clearedRows);
  const topScore = useSelector(state => state.topScore.topScore);

  const setTopScoreState = useSetTopScoreState();

  const backgroundClasses = () => {
    return `${
      liveBackground === 'one' ? styles['before-is-hidden'] : styles['before-is-visible']
    } ${styles[backgroundOne]} ${styles[`${backgroundTwo}-before`]}`;
  };

  const setScreenHeightCssVariable = () => {
    document.documentElement.style.setProperty('--screen-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', setScreenHeightCssVariable);
    setScreenHeightCssVariable();
    return () => window.removeEventListener('resize', setScreenHeightCssVariable);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('tetris.top-score'))
      setTopScoreState(localStorage.getItem('tetris.top-score'));
  }, [setTopScoreState]);

  useEffect(() => {
    if (status === gameOver) {
      if ((topScore && clearedRows > topScore) || (!topScore && clearedRows > 0)) {
        setTopScoreState(clearedRows);
        localStorage.setItem('tetris.top-score', clearedRows);
      }
    }
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`${styles['page-container']} ${backgroundClasses()}`}>
      <div className={styles['game-container']}>
        <LeftSidebar />
        <MobileScoreBoard />
        <GameBoard />
        <MobileButtons />
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
