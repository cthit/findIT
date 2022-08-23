import { Category } from "../../data/category";
import { Service } from "../../data/service";
import ServiceCard from "../views/ServiceCard";

import styles from "./CategoryList.module.scss";

export interface CategoryListProps {
  services: Category;
}
const CategoryList = ({ services }: CategoryListProps) => (
  <div id={services.category}>
    <p className="titleClass marginLeftBig marginTopBig">{services.category}</p>
    <div className={styles.categoryList}>
      {services.services.map((service) => (
        <ServiceCard service={service} key={service.title} />
      ))}
    </div>
  </div>
);

export default CategoryList;
