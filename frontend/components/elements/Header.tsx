import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Category } from "../../data/category";
import NavBar from "../views/NavBar";

import styles from "./Header.module.scss";

export interface HeaderProps {
  categories: Category[];
  show: boolean;
  setShow: any;
  darkMode: boolean;
  setDarkMode: any;
}
const Header = ({
  categories,
  show,
  setShow,
  darkMode,
  setDarkMode
}: HeaderProps) => (
  <div className={`${styles.headerStyle}`}>
    <NavBar categories={categories} show={show} darkMode={darkMode} />
    <img
      className={styles.showNav}
      src="images/Hamburger_icon.png"
      onClick={() => {
        setShow(!show);
      }}
    />
    <h1 className={`${styles.titleStyle}`}>findIT</h1>
    <a
      onClick={() => {
        setDarkMode(!darkMode);
      }}>
      {darkMode ? (
        <DarkModeIcon className={styles.darkModeIcon} />
      ) : (
        <LightModeIcon className={styles.darkModeIcon} />
      )}
    </a>
  </div>
);

export default Header;
