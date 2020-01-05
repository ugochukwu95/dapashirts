import React, {Component} from "react";
import {DepartmentNavigation} from "./DepartmentNavigation";
import { Link } from "react-router-dom";
import { CartSummary } from "./CartSummary";
import {CategoryPage} from "./CategoryPage";
import {FrontPage} from "./FrontPage";
import {ProductDetails} from "./ProductDetails";

export class Shop extends Component {
	handleAddToCart = (...args) => {
		this.props.addToCart(...args);
		this.props.history.push("/cart");
	}

	render() {
		let comp;
		if (this.props.match.url === '/') {
			comp = <FrontPage {...this.props} />;
		}
		else if (this.props.match.url.search("cat") !== -1)  {
			comp = <CategoryPage {...this.props} />;
		}
		else if (this.props.match.url.search("product") !== -1) {
			comp = <ProductDetails {...this.props} />
		}

		return <React.Fragment>
			<header>
				<div className="navbar-fixed">
					<nav className="white grey-text text-darken-2">
		    			<div className="nav-wrapper container">
		    				<Link to="/" className="brand-logo header_font black-text left">Ugo Oguejiofor.</Link>
		    				<Link to="#!" data-target="mobile-demo" className="right black-text sidenav-trigger">
		    					<i className="material-icons">menu</i>
		    				</Link>
		    				<ul id="nav-mobile" className="right hide-on-med-and-down">
		       					<DepartmentNavigation categories={this.props.categories} />
		    				</ul>
		    				<ul className="right">
		    					<CartSummary {...this.props} />
		    				</ul>
		    			</div>
		  			</nav>
	  			</div>
	  			<ul className="sidenav" id="mobile-demo">
				    <DepartmentNavigation categories={this.props.categories} />
				</ul>
			</header>
			<main>
				{comp}
			</main>
		</React.Fragment>
	}
}