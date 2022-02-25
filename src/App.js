import { useSelector } from 'react-redux';

import LeftSidebar from './components/layout/big-screen/LeftSidebar';
import MobileScoreBoard from './components/layout/mobile/MobileScoreBoard';
import GameBoard from './components/GameBoard';
import MobileButtons from './components/layout/mobile/MobileButtons';
import RightSidebar from './components/layout/big-screen/RightSidebar';

import styles from './App.module.css';
import { useEffect } from 'react';

const App = () => {
  const backgroundOne = useSelector(state => state.gameBoard.backgroundOne);
  const backgroundTwo = useSelector(state => state.gameBoard.backgroundTwo);
  const liveBackground = useSelector(state => state.gameBoard.liveBackground);

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
