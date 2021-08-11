import React, { Component } from "react";
import { Service } from "../../elements/service/index";
import data from "../../../service.json";
import { GridStyle } from "./styles";
import { DigitHeaderDrawer } from "@cthit/react-digit-components";
import CategoryList from "../../elements/categorylist";
import ServiceView from "../../elements/serviceview";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDigIT: false,
        };
    }

    render() {
        const categories = Object.entries(mapCategories(data)).sort((a, b) =>
            a[0].localeCompare(b[0])
        );

        const services = categories.map(([category, items]) => ({
            category,
            services: makeCardsFromServicesData(items),
        }));

        function mapCategories(data) {
            return data.reduce((categories, item) => {
                if (!categories[item.category]) {
                    categories[item.category] = [];
                }
                categories[item.category].push(item);
                return categories;
            }, {});
        }

        function makeCardsFromServicesData(data) {
            return data
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(s => <Service {...s} key={s.title} />);
        }

        return (
            <DigitHeaderDrawer
                title="findIT"
                renderDrawer={() => (
                    <CategoryList
                        categoryNames={categories.map(([name]) => name)}
                        onDigITActivate={d => this.setState({ isDigIT: d })}
                    />
                )}
                renderMain={() => (
                    <GridStyle>
                        <ServiceView
                            services={services}
                            isDigIT={this.state.isDigIT}
                        />
                    </GridStyle>
                )}
            />
        );
    }
}

export default HomeScreen;
