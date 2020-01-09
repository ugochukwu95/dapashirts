import {DataTypes} from "./Types";

//const protocol = "http";
//const hostname = "localhost"; 
//const hostname = "ugo-dapashirts.appspot.com";
//const port = process.env.PORT || 80;

export const RestUrls = {
	[DataTypes.PRODUCTS]: `/api/products`,
	[DataTypes.CATEGORIES]: `/api/categories`,
	[DataTypes.ORDERS]: `/api/orders`
}