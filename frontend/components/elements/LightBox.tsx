import { Category } from "../../data/category";
import { Service } from "../../data/service";
import ServiceCard from "../views/ServiceCard";

import CategoryList from "./Categorylist";
import styles from "./LightBox.module.scss";

export interface LightBoxProps {
  services: Category[];
  show: boolean;
  setShow: any;
}
function LightBox({ services, show, setShow }: LightBoxProps) {
  if (!show) {
    return (
      <div>
        {services.map((service: Category) => (
          <CategoryList services={service} key={service.category} />
        ))}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        {services.map((service: Category) => (
          <CategoryList services={service} key={service.category} />
        ))}
        <div className={styles.hidden}></div>
      </div>
    );
  }
}

export default LightBox;
