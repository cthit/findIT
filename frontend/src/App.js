import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './components/screens/homeScreen/index'
import data from './service.json'



class App extends Component {

  render() {
    return (
      <div className="App">

				<Switch>
					<Route path="/" exact><HomeScreen services={data} /></Route>

          {/* <Route path="/json" exact>{data}</Route> */}

				</Switch>   

			</div>
    );
  }
}

export default App;