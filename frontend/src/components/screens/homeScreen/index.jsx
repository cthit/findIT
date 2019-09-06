import React, { Component } from "react";
import { Service } from "../../elements/service/index";
import { Container, ServiceContainer, Content } from "./styles";
import { Header } from "../../views/header/index";
import data from "../../../service.json";

class HomeScreen extends Component {
    render() {
        const services = data
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(s => <Service {...s} key={s.title} />);

        return (
            <Container>
                <Content>
                    <Header />
                    <ServiceContainer>{services}</ServiceContainer>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;
