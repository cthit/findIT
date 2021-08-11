import {
    DigitDesign,
    DigitLayout,
    DigitList,
} from "@cthit/react-digit-components";
import digITService from "../../../digITService.json";
import React from "react";

export default function CategoryList({ categoryNames, onDigITActivate }) {
    function onClick(item) {
        onDigITActivate(item.text === digITService.title);
        window.setTimeout(
            () => document
                .getElementById(item.text)
                .scrollIntoView({ behavior: "smooth" }),
            0
        );
    }

    const items = categoryNames.map(text => ({ text }));
    items.push({ text: digITService.title });

    return (
        <DigitList
            title="Categories"
            items={items}
            onClick={onClick}
        />
    );
}
