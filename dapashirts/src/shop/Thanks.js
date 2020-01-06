import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Thanks extends Component {
	render() {
		return <div className="row">
			<div className="col s12">
				<h5 className="header_font center">Ugo Oguejiofor.</h5>
			</div>
			<div className="col s12 center grey-text text-darken-2">
				<h2>Thanks!</h2>
					<p>Thanks for placing your order.</p>
					<p>Your order reference is { this.props.order ? this.props.order._id : 0 }</p>
					<p>We'll ship your goods as soon as possible.</p>
					<Link to="/" className="btn textsmall waves-effect waves-light black white-text">
						Return to Store
					</Link>
			</div>
		</div>
	}
}