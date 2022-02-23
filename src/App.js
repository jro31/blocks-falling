import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <div className='page-container'>
      <div className='game-container'>
        <ScoreBoard />
        <GameBoard />
        <Buttons />
      </div>
    </div>
  );
};

export default App;
