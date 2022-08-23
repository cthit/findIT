import NavBar from "../views/NavBar";

import styles from "./Header.module.scss";

export interface HeaderProps {
  categories: string[];
}
const Header = ({ categories }: HeaderProps) => (
  <div className={styles.headerStyle}>
    <NavBar categories={categories} />
    <h1 className={`marginLeftGiant ${styles.titleStyle}`}>findIT</h1>
  </div>
);

export default Header;
