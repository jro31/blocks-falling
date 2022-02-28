import styles from './Heading.module.css';

const Heading = props => {
  return <div className={styles.heading}>{props.children}</div>;
};

export default Heading;
