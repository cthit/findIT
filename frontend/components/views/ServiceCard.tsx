import Image from "next/image";

import { Service } from "../../data/service";

import styles from "./ServiceCard.module.scss";

export interface ServiceCardProps {
  service: Service;
}
const ServiceCard = ({ service }: ServiceCardProps) => (
  <div className="card">
    <p className="titleClass">
      <img
        src={`${service.url}/favicon.ico`}
        className={styles.iconClass}
        alt=" "
      />
      {service.title}
    </p>
    <p>{service.description}</p>
    <a className={styles.aClass} href={service.github_url}>
      GITHUB
    </a>
    <button
      className={styles.buttonClass}
      onClick={() => {
        window.open(service.url);
      }}
    >
      OPEN SERVICE
    </button>
  </div>
);

export default ServiceCard;
