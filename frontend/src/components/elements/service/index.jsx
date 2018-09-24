import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  Container,
  ServiceHeader,
  ServiceTitle,
  ServiceIcon,
  Description,
  ButtonGroup,
  ServiceButton,
  GithubButton,
  ButtonIcon
} from "./styles";

export const Service = ({
  title,
  url,
  description,
  github_url,
  fontawesome_icon
}) => (
  <Container>
    <ServiceHeader>
      <ServiceIcon className={"fa " + fontawesome_icon} />
      <ServiceTitle target="_blank" href={url}>
        {title}
      </ServiceTitle>
    </ServiceHeader>

    <Description>{description}</Description>

    <ButtonGroup>
      {github_url === "" ? (
        ""
      ) : (
        <GithubButton appearence="primary" target="_blank" href={github_url}>
          <ButtonIcon className="fa fa-github" /> Github
        </GithubButton>
      )}
      <ServiceButton appearence="primary" target="_blank" href={url}>
        <ButtonIcon className="fa fa-external-link" /> Open Service
      </ServiceButton>
    </ButtonGroup>
  </Container>
);
