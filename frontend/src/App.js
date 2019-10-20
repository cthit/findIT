import React, { Component } from "react";
import HomeScreen from "./components/screens/homeScreen/index";
import data from "./service.json";
import { DigitProviders } from "@cthit/react-digit-components";

class App extends Component {
    render(
        preloadedState = {
            loading: true,
        }
    ) {
        return (
            <DigitProviders
                preloadedState={preloadedState}
                defaultLangauge="sv"
            >
                <div className="App">
                    <HomeScreen services={data} />
                </div>
            </DigitProviders>
        );
    }
}

export default App;
