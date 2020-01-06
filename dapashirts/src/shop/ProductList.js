import React, {Component} from "react";
import { Link } from "react-router-dom";

export class ProductList extends Component {

	constructor(props) {
		super(props);
		this.M = window.M;
	}

	handleAddToCart = (p, event) => {
		this.props.addToCart(p);
		this.M.toast({html: `Added ${p.name} to cart`});
	}

	componentDidMount() {
		this.M.AutoInit();
	}

	render() {
		if (this.props.products == null || this.props.products.length === 0) {
			return <div className="row">
				<div className="col l8 offset-l2 m8 offset-m2 s10 offset-s1">
					<h5 className="grey-text text-darken-2">:-( No products</h5>
				</div>
			</div>
		}

		return <div className="flex-container">
			{this.props.products.map(p => {
				return <div className="flex-item" key={p._id}>
					<div className="card z-depth-0">
						<div className="card-image">
							<Link to={`/product/${p.name.replace(/\s+/g, '-').toLowerCase()}/${p._id}`}>
								<img src={require(`../images/product_images/${p.image}`)} alt={`${p.name} shirt`} />
							</Link>
							<button onClick={ (ev) =>  this.handleAddToCart(p, ev) } 
								className="btn-floating halfway-fab waves-effect waves-light black">
								<i className="material-icons">add_shopping_cart</i>
							</button>
						</div>
						<div className="card-content grey-text text-darken-2 center">
							<p><strong>{p.name}</strong></p>
							<br />
							<p>${((p.discounted_price !== 0) && (p.discounted_price < p.price)) ? p.discounted_price.toFixed(2) : p.price.toFixed(2)}</p>
						</div>
					</div>
				</div>
			})
			}
		</div>
	}
}