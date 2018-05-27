import React, { Component } from "react";
import HomeScreen from "./components/screens/homeScreen/index";
import data from "./service.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeScreen services={data} />
      </div>
    );
  }
}

export default App;
