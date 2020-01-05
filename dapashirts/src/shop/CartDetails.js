import React, {Component} from "react";
import { Link } from "react-router-dom";
import { CartDetailsRows } from "./CartDetailsRows";

export class CartDetails extends Component {
	getLinkClasses = () => `btn textsmall green lighten-1 white-text ${this.props.cartItems === 0 ? "disabled": ""}`;
	
	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col s10 offset-s1">
					<h4 class="center header_font grey-text text-darken-2">Your Cart</h4>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m12 l8 offset-l2">
					<table className="highlight centered">
						<thead>
							<tr>
								<th>Quantity</th>
								<th>Product</th>
								<th>Price</th>
								<th>Subtotal</th>
								<th/>
							</tr>
						</thead>
						<tbody>
							<CartDetailsRows cart={ this.props.cart} cartPrice={ this.props.cartPrice } 
								updateQuantity={ this.props.updateCartQuantity } removeFromCart={ this.props.removeFromCart } />
						</tbody>
					</table><br /><br />
					<div className="center">
						<Link className="btn black white-text waves-effect waves-light textsmall" to="/">
							Continue Shopping
						</Link>&nbsp;&nbsp;
						<Link className={ this.getLinkClasses() } to="/checkout">
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	}
}