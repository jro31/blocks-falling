import LeftSidebar from './components/layout/big-screen/LeftSidebar';
import MobileScoreBoard from './components/layout/mobile/MobileScoreBoard';
import GameBoard from './components/GameBoard';
import MobileButtons from './components/layout/mobile/MobileButtons';
import RightSidebar from './components/layout/big-screen/RightSidebar';

const App = () => {
  return (
    <div className='page-container'>
      <div className='game-container'>
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
