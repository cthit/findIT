import Image from "next/image";

import { Service } from "../../data/service";

import styles from "./ServiceCard.module.scss";

export interface ServiceCardProps {
  service: Service;
}
function ServiceCard({ service }: ServiceCardProps) {
  let src;

  // Use the specified service icon if it exists, otherwise use the service's favicon.
  if (service.icon) {
    src = `images/${service.icon}.svg`;
  } else {
    src = `${service.url}/favicon.ico`;
  }

  return (
    <div className={`${styles.cardClass} card`}>
      <p>
        <img
          src={src}
          className={`${styles.iconClass} marginTop marginLeft marginRight`}
          alt={`${service.title}'s icon`}
        />
        <a className={styles.cardTitle} href={service.url}>
          {service.title}
        </a>
      </p>
      <p className="marginTop">{service.description}</p>
      {service.github_url ? (
        <a className={styles.aClass} href={service.github_url}>
          GITHUB
        </a>
      ) : null}

      <button
        className={styles.buttonClass}
        onClick={() => {
          window.open(service.url);
        }}>
        OPEN SERVICE
      </button>
    </div>
  );
}

export default ServiceCard;
