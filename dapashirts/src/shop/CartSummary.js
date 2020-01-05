import React, {Component} from "react";
import {Link} from "react-router-dom";

export class CartSummary extends Component {
	getSummary = () => {
		if (this.props.cartItems > 0) {
			return <span className="custom_badge circle">{ this.props.cartItems }</span>
		}
		else {
			return <span className="custom_badge circle">0</span>
		}
	}

	getLinkClasses = () => {
		return `notification_icon grey-text text-darken-3 ${ this.props.cartItems === 0 ? "disabled": ""}`;
	}

	render() {
		return <li>
			<Link className={this.getLinkClasses()} to="/cart">
				<i className="material-icons">shopping_cart</i>
				{this.getSummary()}
			</Link>
		</li>
	}
}