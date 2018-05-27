import React, { Component } from 'react'
import { Service } from '../../elements/service/index'
import { Container, ServiceContainer, Content } from './styles'
import { Header } from '../../views/header/index'
import { Footer } from '../../views/footer/index'
import data from '../../../service.json'

class HomeScreen extends Component{
        
    render() {    
        const services = [];
        const dataSorted = Object.keys(data).sort();
        console.log(dataSorted);
        for(let index in dataSorted){
            const key = dataSorted[index];
            const service = data[key];
            services.push(
                <Service {...service} key={service.title}></Service>
            );
        }

        return (
            <Container>
                <Content>
                    <Header></Header>
                    <ServiceContainer>
                        { services }
                    </ServiceContainer>
                </Content>

                {/* <Footer></Footer> */}
                
            </Container>
        );
    }
}

export default HomeScreen;