import React, {Component} from "react";
import { Link } from "react-router-dom";

export class DepartmentNavigation extends Component {
	render() {
		return <React.Fragment>
			{
				this.props.categories && this.props.categories.map(cat => { return <li key={ cat._id }>
						<Link className="grey-text text-darken-1 sidenav-close" 
							to={ `/cat/${cat.name.toLowerCase()}/${cat._id}`}>
							{cat.name}
						</Link>
					</li>
				})
			}
		</React.Fragment>
	}
}