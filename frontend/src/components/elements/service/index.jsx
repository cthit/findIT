import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {ServiceIcon} from "./styles";
import {
    DigitDesign,
    DigitButton,
    DigitText,
    DigitLayout,
    DigitMarkdown,
} from "@cthit/react-digit-components";

function githubButton(github_url) {
    if (github_url !== "") {
        return <a
            style={{textDecoration: "none"}}
            href={github_url}
            target={"_blank"}
        >
            <DigitButton primary text={"GitHub"}/>
        </a>
    } else {
        return <></>
    }
}

export const Service = ({
                            title,
                            url,
                            description,
                            github_url,
                            fontawesome_icon,
                        }) => (
    <DigitDesign.Card size={{width: "300px", height: "250px"}}>
        <DigitDesign.CardBody>
            <DigitLayout.Row>
                <ServiceIcon className={"fa " + fontawesome_icon}/>
                <a
                    style={{color: "black", textDecoration: "none"}}
                    href={url}
                    target={"_blank"}
                >
                    <DigitText.Heading5 text={title} bold/>
                </a>
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={description}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardButtons reverseDirection>
            <a
                style={{marginLeft: "10px", textDecoration: "none"}}
                href={url}
                target={"_blank"}
            >
                <DigitButton primary outlined raised text={"Open service"}/>
            </a>
            {githubButton(github_url)}
        </DigitDesign.CardButtons>
    </DigitDesign.Card>
);
