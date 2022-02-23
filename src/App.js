import LeftSidebar from './components/LeftSidebar';
import MobileScoreBoard from './components/MobileScoreBoard';
import GameBoard from './components/GameBoard';
import MobileButtons from './components/MobileButtons';
import RightSidebar from './components/RightSidebar';

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
