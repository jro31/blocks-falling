import styles from './KeyboardControls.module.css';
import LegendItem from './LegendItem';

const KeyboardControls = () => {
  return (
    <div className={styles['keyboard-controls']}>
      <div className={styles.heading}>Keyboard controls</div>
      <div>
        <LegendItem keyName='Space' action='Start/Pause' />
        <LegendItem keyName='&#11013;' action='Move left' />
        <LegendItem keyName='&#11157;' action='Move right' />
        <LegendItem keyName='&#11015;' action='Move down' />
        <LegendItem keyName='Z' action='Rotate anti-clockwise' />
        <LegendItem keyName='X' action='Rotate clockwise' />
      </div>
    </div>
  );
};

export default KeyboardControls;
