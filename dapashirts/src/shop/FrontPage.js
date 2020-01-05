import React, {Component} from "react";
import {ProductList} from "./ProductList";

export class FrontPage extends Component {
	constructor(props) {
      super(props);
      this.M = window.M;
    }
	render() {
		return <React.Fragment>
			<div className="slider">
				<ul className="slides">
					<li>
						<img src={require(`../images/images/women-curvy-ian-reyes-woman-wallpaper.jpg`)} 
							alt="Homepage promo" />
						<div className="caption left-align">
	    					<h3 className="white-text">Get only the best printed shirts</h3>
	    					<h6 className="light white-text text-lighten-3">Designed with Reactjs, MongoDB, Nodejs, ...</h6>
	     				</div>
					</li>
				</ul>
			</div>
			<div className="row">
				<div className="col s12">
					<h5 className="center featured_prod_text">Featured Products</h5>
					<ProductList products={this.props.products} addToCart={ this.props.addToCart } />
				</div>
			</div>
		</React.Fragment>
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