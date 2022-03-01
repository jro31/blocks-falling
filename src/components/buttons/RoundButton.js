import styles from './RoundButton.module.css';

const RoundButton = props => {
  const buttonClickHandler = event => {
    event.preventDefault();
    props.onClick();
  };

  const buttonTouchHandler = event => {
    event.preventDefault();
  };

  return (
    <div
      className={styles['round-button']}
      onTouchStart={buttonTouchHandler}
      onClick={buttonClickHandler}
    >
      {props.children}
    </div>
  );
};

export default RoundButton;
