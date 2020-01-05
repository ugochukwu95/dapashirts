import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";

const mapStateToProps = (dataStore) => ({
	...dataStore
});

const mapDispatchToProps = {
	loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
}

const filterProducts = (products = [], url, routeprops) => {
	let filteredProds;

	if (url.search("cat") !== -1) {
		filteredProds = products.filter((obj) => obj.category_id.includes(routeprops.match.params.id));
		return filteredProds;
	}
	else if (url.search("product") !== -1) {
		filteredProds = products.find((obj) => obj._id === routeprops.match.params.prodId);
		return filteredProds;
	}
	else {
		filteredProds = products.filter((obj) =>  obj.display === 1 || obj.display === 3);
		return filteredProds;
	}
}

	

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
	class extends Component {
		render() {
			return <Switch> 
				<Route exact={true} path={["/", "/cat/:category/:id", "/product/:prodName/:prodId"]} render={ (routeProps) => 
					<Shop { ...this.props } { ...routeProps } 
					products={ filterProducts(this.props.products, routeProps.match.url, routeProps) } />} />
				<Route exact={true} path="/cart" render={ (routeProps) => <CartDetails { ...this.props } { ...routeProps } />} />
				<Redirect to="/" />
			</Switch>
		}
		
		componentDidMount() {
			this.props.loadData(DataTypes.CATEGORIES);
			this.props.loadData(DataTypes.PRODUCTS);
		}
	}
)