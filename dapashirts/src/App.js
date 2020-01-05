import React, { Component } from "react";
import { DapaShirtsDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
//import { CartDetails } from "./shop/CartDetails";


export default class App extends Component {
    constructor(props) {
      super(props);
      this.M = window.M;
    }
    render() {
        return <Provider store={ DapaShirtsDataStore }>
            <Router>
                <Switch>
                    <Route path="/" component={ ShopConnector } />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Provider>
    }
    componentDidMount() {
        this.M.AutoInit();
        let slider = document.querySelectorAll('.slider');
        let options = {
          indicators: false,
          height: 300,
          hover: true,
          interval: 10000, 
      };
      
      this.M.Slider.init(slider, options);

      let sidenav = document.querySelectorAll('.sidenav');
      let options2 = {
        edge: "right",
      }

      this.M.Sidenav.init(sidenav, options2);
    }
}