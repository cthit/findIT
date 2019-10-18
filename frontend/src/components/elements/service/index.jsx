import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { ServiceIcon } from "./styles";
import {
    DigitDesign,
    DigitButton,
    DigitText,
    DigitLayout,
    DigitMarkdown,
    DigitIfElseRendering,
} from "@cthit/react-digit-components";

export const Service = ({
    title,
    url,
    description,
    github_url,
    fontawesome_icon,
}) => (
    <DigitDesign.Card width="320px" height="190px">
        <DigitDesign.CardBody>
            <DigitLayout.Row>
                <ServiceIcon className={"fa " + fontawesome_icon} />
                <a
                    style={{ color: "black", textDecoration: "none" }}
                    href={url}
                    target={"_blank"}
                >
                    <DigitText.Heading5 text={title} bold />
                </a>
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={description} />
        </DigitDesign.CardBody>
        <DigitDesign.CardButtons reverseDirection>
            <a style={{ marginLeft: "10px" }} href={url} target={"_blank"}>
                <DigitButton primary outlined raised text={"Open service"} />
            </a>
            <DigitIfElseRendering
                test={github_url !== ""}
                ifRender={() => (
                    <a style={{}} href={github_url} target={"_blank"}>
                        <DigitButton primary text={"GitHub"} />
                    </a>
                )}
                elseRender={() => <div></div>}
            />
        </DigitDesign.CardButtons>
    </DigitDesign.Card>
);
