import React, {Component} from "react";
import { Link } from "react-router-dom";

export class ProductDetails extends Component {
	constructor(props) {
      super(props);
      this.M = window.M;
    }

    handleAddToCart = (p, event) => {
		this.props.addToCart(p);
		this.M.toast({html: `Added ${p.name} to cart`});
	}

	render() {
		return <React.Fragment>
		{
			this.props.products && <div className="row">
			<div className="col s12">
				<h3 className="center header_font">{this.props.products.name}</h3>
				<div className="row">
					<div className="col l4 m4 s12">
						<div className="center">
							<img className="responsive-img" src={require(`../images/product_images/${this.props.products.image}`)} 
							alt={`${this.props.products.name} shirt`} /><br />
							<img className="responsive-img" src={require(`../images/product_images/${this.props.products.image_2}`)} 
							alt={`${this.props.products.name} print`} />
						</div>
						<br/>
						<h5 className="grey-text text-darken-2 flow-text center"><strong>Price: 
							${((this.props.products.discounted_price !== 0) && (this.props.products.discounted_price < this.props.products.price)) ? this.props.products.discounted_price.toFixed(2) : this.props.products.price.toFixed(2)}</strong></h5>
					</div>
					<div className="col l8 m8 s12">
						<p className="grey-text text-darken-2 flow-text">{this.props.products.description}</p>
						<p className=""><button onClick={ (ev) =>  this.handleAddToCart(this.props.products, ev) } 
							className="btn textsmall waves-effect waves-light black white-text">
							Add to Cart
						</button></p>
						<p className="">
							<Link className="btn black white-text waves-effect waves-light textsmall" to="/">
								Continue Shopping
							</Link>
						</p>
					</div>
				</div>
			</div>
			</div>
		}
		</React.Fragment>
	}

	componentDidMount() {
        this.M.AutoInit();
        let sidenav = document.querySelectorAll('.sidenav');
        let options2 = {
            edge: "right",
        }

        this.M.Sidenav.init(sidenav, options2);
    }
}