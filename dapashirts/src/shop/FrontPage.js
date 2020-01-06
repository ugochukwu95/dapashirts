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
						<img src={require(`../images/images/0659f67a-83d7-453e-af11-b35ce1e5f08e.jpg`)} 
							alt="Homepage promo" />
						<div className="caption left-align">
	    					<h3 className="white-text"><b>Get only the best printed shirts</b></h3>
	    					<h6 className="white-text text-lighten-3"><b>Designed with Reactjs, MongoDB, Nodejs, ...</b></h6>
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