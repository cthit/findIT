import NavBar from "../views/NavBar";

import styles from "./Header.module.scss";

export interface HeaderProps {
  categories: string[];
  show: boolean;
  setShow: any;
}
const Header = ({ categories, show, setShow }: HeaderProps) => (
  <div className={styles.headerStyle}>
    <NavBar categories={categories} show={show} />
    <img
      className={styles.showNav}
      src="Hamburger_icon.png"
      onClick={() => {
        setShow(!show);
      }}
    />
    <h1 className={`${styles.titleStyle}`}>findIT</h1>
  </div>
);

export default Header;
