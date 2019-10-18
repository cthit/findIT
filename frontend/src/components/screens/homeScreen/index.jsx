import React, { Component } from "react";
import { Service } from "../../elements/service/index";
import data from "../../../service.json";
import { DigitLayout, DigitHeader } from "@cthit/react-digit-components";

const gridStyle = {
    marginLeft: "2vw",
    marginRight: "2vw",
    marginTop: "20px",
    width: "95vw",
};

class HomeScreen extends Component {
    render() {
        const services = data
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(s => <Service {...s} key={s.title} />);

        return (
            <DigitHeader
                title="findIT"
                renderMain={() => (
                    <div style={gridStyle}>
                        <DigitLayout.UniformGrid
                            margin="30px"
                            minItemWidth="320px"
                            justifyItems="center"
                        >
                            {services}
                        </DigitLayout.UniformGrid>
                    </div>
                )}
            />
        );
    }
}

export default HomeScreen;
