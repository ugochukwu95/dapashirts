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

		let today = new Date();
		let yyyy = today.getFullYear();

		return <React.Fragment>
			<header>
				<div className="navbar-fixed">
					<nav className="white grey-text text-darken-2">
		    			<div className="nav-wrapper container">
		    				<Link to="/" className="brand-logo header_font black-text left">DapaShirts.</Link>
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
			<footer className="page-footer grey lighten-5 grey-text text-darken-2">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5><strong>Built by Ugochukwu Oguejiofor</strong></h5>
							<p><img src={require(`../images/images/FSce6xqz_400x400.jpg`)} alt="Ugo Oguejiofor" 
							height="100" width="100" /></p>
							<p>Developed using Reactjs, Nodejs, MongoDb, Redux, Axios, Express, HTML5, 
								CSS3, and the MaterializeCSS Framework</p>
						</div>
						<div className="col l4 offset-l2 s12">
                			<h5><strong>Find Me</strong></h5>
                			<ul>
                				<li><a rel="noopener noreferrer" href="https://github.com/ugochukwu95" target="_blank" className="btn black white-text waves-effect waves-light">GitHub</a>
                				&nbsp; <a rel="noopener noreferrer" href="https://twitter.com/thisis_ugo" target="_blank" className="btn black white-text waves-effect waves-light">Twitter</a></li>
                				<li><br /></li>
                				<li>Product Images gotten from: <a rel="noopener noreferrer" className="pink-text" href="https://github.com/apress/beg-php-mysql-e-commerce" target="_blank"><u>Here</u></a></li>
                			</ul>
                		</div>
					</div>
				</div>
				<div className="footer-copyright">
            		<div className="container grey-text text-darken-2">
            			© {yyyy} Copyright
		            </div>
		        </div>
			</footer>
		</React.Fragment>
	}
}