import React, {Component} from "react";
import {ProductList} from "./ProductList";

export class CategoryPage extends Component {
	constructor(props) {
      super(props);
      this.M = window.M;
    }

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col s12">
					<div className="container">
					<h5 className="center header_font grey-text text-darken-2">
						{(Array.isArray(this.props.categories) && this.props.match.params.id !== undefined) ? this.props.categories.find((obj) => obj._id === this.props.match.params.id).name : ""}
					</h5>
					<p className="grey-text text-darken-2">
						{(Array.isArray(this.props.categories) && this.props.match.params.id !== undefined) ? this.props.categories.find((obj) => obj._id === this.props.match.params.id).description : ""}
					</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					<ProductList {...this.props} />
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
      //console.log(this.props);
    }
}