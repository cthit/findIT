import { Category } from "../../data/category";

import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: Category[];
  show: boolean;
}
function NavBar({ categories, show }: NavBarProps) {
  return (
    <div
      className={`${styles.navStyle} ${show ? styles.shown : styles.hidden}`}>
      <p>Categories</p>
      {categories.map((category) => (
        <p key={category.category}>
          <a href={`#${category.category}`}>{category.category}</a>
        </p>
      ))}
    </div>
  );
}

export default NavBar;
