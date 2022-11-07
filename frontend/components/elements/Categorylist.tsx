import { Category } from "../../data/category";
import { Service } from "../../data/service";
import ServiceCard from "../views/ServiceCard";

import styles from "./CategoryList.module.scss";

export interface CategoryListProps {
  categories: Category;
  darkMode: boolean;
}
const CategoryList = ({ categories, darkMode }: CategoryListProps) => (
  <div id={categories.category} className={styles.catBox}>
    <p className="titleClass marginLeftBig marginTopBig">
      {categories.category}
    </p>
    <div className={styles.categoryList}>
      {categories.services.map((service) => (
        <ServiceCard
          service={service}
          key={service.title}
          darkMode={darkMode}
        />
      ))}
    </div>
  </div>
);

export default CategoryList;
