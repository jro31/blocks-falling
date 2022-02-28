import Heading from '../text/Heading';
import styles from './Scoreboard.module.css';

const Scoreboard = props => {
  return (
    <div
      className={`${styles['scoreboard']} ${
        props.alignRight ? styles['align-right'] : styles['align-left']
      }`}
    >
      <Heading>{props.name}</Heading>
      <div className={styles.score}>{props.score}</div>
    </div>
  );
};

export default Scoreboard;
