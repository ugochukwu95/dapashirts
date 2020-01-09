import React, { Component } from "react";
import { ValidatedForm } from "../forms/ValidatedForm";

export class Checkout extends Component {
	constructor(props) {
		super(props);
		this.defaultAttrs = { type: "text", required: true };
		this.formModel = [
			{ label: "Name"},
			{ label: "Email", attrs: { type: "email" }},
			{ label: "Address" },
			{ label: "City"},
			{ label: "Country"}]
	}

	handleSubmit = (formData) => {
		const order = { ...formData, products: this.props.cart.map(item => ({ quantity: item.quantity, product_id: item.product._id})) }
		this.props.placeOrder(order);
		this.props.clearCart();
		this.props.history.push("/thanks");
	}

	handleCancel = () => {
		this.props.history.push("/cart");
	}

	render() {
		return <div className="container">
			<div className="row">
				<div className="col s12">
					<h5 className="header_font center">DapaShirts.</h5>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					<ValidatedForm formModel={ this.formModel } defaultAttrs={ this.defaultAttrs } 
					submitCallback={ this.handleSubmit } cancelCallback={ this.handleCancel } submitText="Place Order"
						cancelText="Return to Cart" />
				</div>
			</div>
		</div>
	}	

	componentDidMount() {
		if (this.props.cartItems === undefined || this.props.cartItems === 0) {
			this.props.history.push("/");
		}
	}
}