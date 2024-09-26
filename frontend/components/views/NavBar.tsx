import { Category } from "../../data/category";
import DarkModeSwitch from "../elements/DarkModeSwitch";

import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: Category[];
  show: boolean;
  setShow: any;
  darkMode: boolean;
  setDarkMode: any;
}
function NavBar({
  categories,
  show,
  setShow,
  darkMode,
  setDarkMode
}: NavBarProps) {
  return (
    <div
      className={`${styles.navStyle} ${show ? styles.shown : styles.hidden}`}>
      {categories.map((category) => (
        <p key={category.category}>
          <a
            href={`#${category.category}`}
            className={styles.linkBox}
            onClick={() => setShow(!show)}>
            {category.category}
          </a>
        </p>
      ))}
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default NavBar;
