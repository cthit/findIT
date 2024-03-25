import { Category } from "../../data/category";
import NavBar from "../views/NavBar";

import styles from "./Header.module.scss";

export interface HeaderProps {
  categories: Category[];
  show: boolean;
  setShow: any;
}
const Header = ({
  categories,
  show,
  setShow,
}: HeaderProps) => (
  <nav className={`${styles.headerStyle}`}>
    <NavBar
      categories={categories}
      show={show}
      setShow={setShow}
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
