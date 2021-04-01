import {
    DigitDesign,
    DigitLayout,
    DigitList,
} from "@cthit/react-digit-components";
import React from "react";

export default function CategoryList({ categoryNames }) {
    function onClick(item) {
        document
            .getElementById(item.text)
            .scrollIntoView({ behavior: "smooth" });
    }

    const items = categoryNames.map(text => ({ text }));

    return (
        <DigitList
            title="Categories"
            items={items}
            onClick={onClick}
        />
    );
}
