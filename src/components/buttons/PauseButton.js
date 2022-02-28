import { useDispatch, useSelector } from 'react-redux';

import { gameBoardActions, gameOver, inProgress, paused, preGame } from '../../store/game-board';
import useBeginGame from '../../hooks/use-begin-game';
import styles from './PauseButton.module.css';

const PauseButton = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.gameBoard.status);
  const beginGame = useBeginGame();

  const icon = () => (status === inProgress ? '/icons/pause.svg' : '/icons/play.svg');

  const buttonClickHandler = event => {
    event.preventDefault();

    switch (status) {
      case preGame:
      case gameOver:
        beginGame();
        break;
      case inProgress:
        dispatch(gameBoardActions.pauseGame());
        break;
      case paused:
        dispatch(gameBoardActions.resumeGame());
        break;
      default:
        throw new Error('Unknown status used with pause button');
    }
  };

  return (
    <div className={styles['pause-button']} onClick={buttonClickHandler}>
      <img src={icon()} alt='II' />
    </div>
  );
};

export default PauseButton;
