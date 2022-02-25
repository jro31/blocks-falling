import useBackgroundIsDark from '../../hooks/use-background-is-dark';
import styles from './RoundButton.module.css';

const RoundButton = props => {
  const backgroundIsDark = useBackgroundIsDark();

  const buttonColorClass = () => (backgroundIsDark() ? styles.light : styles.dark);

  return (
    <div className={`${styles['round-button']} ${buttonColorClass()}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default RoundButton;
