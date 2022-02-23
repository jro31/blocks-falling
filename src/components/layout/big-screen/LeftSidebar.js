import styles from './LeftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={`sidebar ${styles['left-sidebar']}`}>
      <div className={styles['score-container']}>Current score</div>
      <div className={styles['buttons-container']}>Left buttons</div>
    </div>
  );
};

export default LeftSidebar;
