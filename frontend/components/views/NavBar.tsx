import { Category } from "../../data/category";

import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: Category[];
  show: boolean;
  setShow: any;
}
function NavBar({ categories, show, setShow }: NavBarProps) {
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
    </div>
  );
}

export default NavBar;
