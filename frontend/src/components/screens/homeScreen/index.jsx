import React, { Component } from "react";
import { Service } from "../../elements/service/index";
import data from "../../../service.json";
import { SidebarContainer, GridStyle } from "./styles";
import { DigitLayout, DigitHeader } from "@cthit/react-digit-components";
import CategoryList from "../../elements/categorylist";
import ServiceView from "../../elements/serviceview";

class HomeScreen extends Component {
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

        function Sidebar(props) {
            return (
                <SidebarContainer>
                    <CategoryList {...props} />
                </SidebarContainer>
            );
        }

        return (
            <DigitHeader
                title="findIT"
                renderMain={() => (
                    <GridStyle>
                        <DigitLayout.Grid columns={"min-content 1fr"}>
                            <Sidebar
                                categoryNames={categories.map(([name]) => name)}
                            />
                            <ServiceView services={services} />
                        </DigitLayout.Grid>
                    </GridStyle>
                )}
            />
        );
    }
}

export default HomeScreen;
