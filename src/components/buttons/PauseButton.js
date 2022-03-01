import { useDispatch, useSelector } from 'react-redux';

import { gameBoardActions, gameOver, inProgress, paused, preGame } from '../../store/game-board';
import useBeginGame from '../../hooks/use-begin-game';
import styles from './PauseButton.module.css';

const PauseButton = props => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.gameBoard.status);
  const beginGame = useBeginGame();

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
    <div
      className={`${styles['pause-button']} ${props.className || ''}`}
      onClick={buttonClickHandler}
    >
      {status === inProgress && <div className={styles['pause-icon']}>=</div>}
      {status !== inProgress && <div className={styles['play-icon']}>&#9654;&#65038;</div>}
    </div>
  );
};

export default PauseButton;
