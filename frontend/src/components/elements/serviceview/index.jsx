import { DigitLayout, DigitText } from "@cthit/react-digit-components";
import { Service } from "../service/index";
import digITService from "../../../digITService.json"
import React from "react";

export default function ServiceView({ services, isDigIT }) {
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
                <section
                    key={category}
                    style={{ display: isDigIT ? "none" : "unset" }}
                >
                    <DigitText.Heading5
                        text={category}
                        id={category}
                        style={{ marginLeft: "15px" }}
                    />
                    <ServicesList services={services} />
                </section>
            ))}
            <section
                style={{ display: isDigIT ? "unset" : "none" }}
            >
                <DigitText.Heading5
                    text="digIT"
                    id="digIT"
                    style={{ marginLeft: "15px" }}
                />
                <ServicesList
                    services={[
                        <Service
                            key={digITService.key}
                            {...digITService}
                        />
                    ]}
                />
            </section>
        </DigitLayout.Column>
    );
}
