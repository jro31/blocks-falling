import styles from './Scoreboard.module.css';

const Scoreboard = props => {
  console.log(props);

  return (
    <div
      className={`${styles['scoreboard']} ${
        props.alignRight ? styles['align-right'] : styles['align-left']
      }`}
    >
      <div className={styles.name}>{props.name}</div>
      <div className={styles.score}>{props.score}</div>
    </div>
  );
};

export default Scoreboard;
