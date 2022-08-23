import styles from "./NavBar.module.scss";

export interface NavBarProps {
  categories: string[];
}
const NavBar = ({ categories }: NavBarProps) => (
  <div className={styles.navStyle}>
    <p>Categories</p>
    {categories.map((category) => (
      <p key={category}>
        <a href={`#${category}`}>{category}</a>
      </p>
    ))}
  </div>
);

export default NavBar;
