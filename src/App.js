import { useSelector } from 'react-redux';

import LeftSidebar from './components/layout/big-screen/LeftSidebar';
import MobileScoreBoard from './components/layout/mobile/MobileScoreBoard';
import GameBoard from './components/GameBoard';
import MobileButtons from './components/layout/mobile/MobileButtons';
import RightSidebar from './components/layout/big-screen/RightSidebar';

import styles from './App.module.css';

const App = () => {
  const background = useSelector(state => state.gameBoard.background);

  return (
    <div className={`${styles['page-container']} ${styles[background]}`}>
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
