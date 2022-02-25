import styles from './RoundButton.module.css';

const RoundButton = props => {
  return (
    <div className={styles['round-button']} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default RoundButton;
