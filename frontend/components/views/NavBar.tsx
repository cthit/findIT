import { Category } from "../../data/category";

import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: Category[];
  show: boolean;
  darkMode: boolean;
}
function NavBar({ categories, show, darkMode }: NavBarProps) {
  return (
    <div
      className={`${styles.navStyle} ${show ? styles.shown : styles.hidden} ${
        darkMode ? styles.darkNav : styles.lightNav
      }`}>
      <p>Categories</p>
      {categories.map((category) => (
        <p key={category.category}>
          <a href={`#${category.category}`}>
            <div className={styles.linkBox}>{category.category}</div>
          </a>
        </p>
      ))}
    </div>
  );
}

export default NavBar;
