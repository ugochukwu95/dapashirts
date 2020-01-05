import React, {Component} from "react";
//import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { loadDeptPageData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import {ProductList} from "./ProductList";

const mapStateToProps = (dataStore) => ({
	...dataStore
});

const mapDispatchToProps = {
	loadDeptPageData
}

//const filterProducts = (products = [], category) =>
	//(!category || category === "All") ? products : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const DepartmentConnector = connect(mapStateToProps, mapDispatchToProps)(
	class extends Component {
		render() {
			return <ProductList { ...this.props }  />
		}
		
		componentDidMount() {
			this.props.loadDeptPageData(DataTypes.PRODUCTS, this.props.match.params.id);
		}
	}
)