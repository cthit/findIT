import { Category } from "../../data/category";

import CategoryList from "./Categorylist";
import styles from "./LightBox.module.scss";

export interface LightBoxProps {
  categories: Category[];
  show: boolean;
  setShow: any;
}
function LightBox({ categories, show, setShow }: LightBoxProps) {
  return (
    <div
      onClick={
        show
          ? () => {
              setShow(!show);
            }
          : () => {
              true;
            }
      }>
      {categories.map((service: Category) => (
        <CategoryList categories={service} key={service.category} />
      ))}
      {show ? <div className={styles.hidden}></div> : null}
    </div>
  );
}

export default LightBox;
