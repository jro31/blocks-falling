import styles from './RoundButton.module.css';

const RoundButton = props => {
  const buttonClickHandler = event => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <div className={styles['round-button']} onClick={buttonClickHandler}>
      {props.children}
    </div>
  );
};

export default RoundButton;
