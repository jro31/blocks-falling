import styles from './RoundButton.module.css';

const RoundButton = props => {
  const buttonClickHandler = event => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <div
      className={`${styles['round-button']} ${
        props.type === 'rotate' ? styles.rotate : styles.move
      }`}
      onTouchStart={props.onTouchStart || null}
      onTouchEnd={props.onTouchEnd || null}
      onClick={buttonClickHandler}
    >
      {props.children}
    </div>
  );
};

export default RoundButton;
