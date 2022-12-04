import { Category } from "../../data/category";
import NavBar from "../views/NavBar";

import DarkModeSwitch from "./DarkModeSwitch";
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
  <nav className={`${styles.headerStyle}`}>
    <NavBar
      categories={categories}
      show={show}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
    <h1 className={`${styles.titleStyle}`}>findIT</h1>
    <div className={styles.catList}>
      {categories.map((category) => (
        <a
          className={styles.catStyle}
          key={category.category}
          href={`#${category.category}`}>
          {category.category}
        </a>
      ))}
    </div>
    <div className={styles.darkModeSwitchInHeaderStyle}>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
    <img
      className={styles.showNav}
      src="images/Hamburger_icon.png"
      onClick={() => {
        setShow(!show);
      }}
    />
  </nav>
);

export default Header;
