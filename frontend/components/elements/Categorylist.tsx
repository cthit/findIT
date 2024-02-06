import { Category } from "../../data/category";
import ServiceCard from "../views/ServiceCard";

import styles from "./CategoryList.module.scss";

export interface CategoryListProps {
  categories: Category;
}
const CategoryList = ({ categories }: CategoryListProps) => (
  <div className={styles.catBox}>
    <div id={categories.category} className={styles.idContainer} />
    <p className="titleClass marginLeftBig marginTopBig">
      {categories.category}
    </p>
    <div className={styles.categoryList}>
      {categories.services.map((service) => (
        <ServiceCard service={service} key={service.title} />
      ))}
    </div>
  </div>
);

export default CategoryList;
