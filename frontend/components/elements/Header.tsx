import styles from "./Header.module.scss";

export interface HeaderProps {}
const Header = () => (
  <div className={styles.headerStyle}>
    <h1 className={`marginLeftGiant ${styles.titleStyle}`}>findIT</h1>
  </div>
);

export default Header;
