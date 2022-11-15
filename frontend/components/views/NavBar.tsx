import { Category } from "../../data/category";
import DarkModeSwitch from "../elements/DarkModeSwitch";

import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: Category[];
  show: boolean;
  darkMode: boolean;
  setDarkMode: any;
}
function NavBar({ categories, show, darkMode, setDarkMode }: NavBarProps) {
  return (
    <div
      className={`${styles.navStyle} ${show ? styles.shown : styles.hidden}`}>
      {categories.map((category) => (
        <p key={category.category}>
          <a href={`#${category.category}`}>
            <div className={styles.linkBox}>{category.category}</div>
          </a>
        </p>
      ))}
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default NavBar;
