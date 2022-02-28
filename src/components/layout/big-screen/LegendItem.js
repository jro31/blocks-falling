import styles from './LegendItem.module.css';

const LegendItem = props => {
  return (
    <div className={styles['legend-item']}>
      <div className={styles['key-name']}>{props.keyName}</div>
      <div className={styles.action}>{props.action}</div>
    </div>
  );
};

export default LegendItem;
