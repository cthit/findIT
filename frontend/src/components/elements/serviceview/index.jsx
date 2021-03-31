import { DigitLayout, DigitText } from "@cthit/react-digit-components";
import React from "react";

export default function ServiceView({ services }) {
    function ServicesList({ services }) {
        return (
            <DigitLayout.Grid
                margin="15px"
                minItemWidth="300px"
                justifyItems="start"
                columns="repeat(auto-fill, 300px)"
            >
                {services}
            </DigitLayout.Grid>
        );
    }

    return (
        <DigitLayout.Column>
            {services.map(({ category, services }) => (
                <div key={category}>
                    <DigitText.Heading5
                        text={category}
                        id={category}
                        style={{ marginLeft: "15px" }}
                    />
                    <ServicesList services={services} />
                </div>
            ))}
        </DigitLayout.Column>
    );
}
