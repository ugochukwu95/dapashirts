import React, { Component } from "react";

export class ValidationError extends Component {
	render() {
		if (this.props.errors) {
			return this.props.errors.map(err =>
				<small className="red-text" key={err}>
					{ err }
				</small>
			)
		}
		return null;
	}
}