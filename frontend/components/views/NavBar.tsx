import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: string[];
  show: boolean;
}
function NavBar({ categories, show }: NavBarProps) {
  if (show) {
    return (
      <div className={`${styles.navStyle} ${styles.shown}`}>
        <p>Categories</p>
        {categories.map((category) => (
          <p key={category}>
            <a href={`#${category}`}>{category}</a>
          </p>
        ))}
      </div>
    );
  } else {
    return (
      <div className={`${styles.navStyle} ${styles.hidden}`}>
        <p>Categories</p>
        {categories.map((category) => (
          <p key={category}>
            <a href={`#${category}`}>{category}</a>
          </p>
        ))}
      </div>
    );
  }
}

export default NavBar;
