module.exports = (app) => {
	const products = require('../controllers/product.controllers.js');

	// Create a new product
	app.post('/api/products', products.create);

	// Retrieve all products
	app.get('/api/products', products.findAll);

	// Retrieve a single product with productId
	app.get('/api/products/:productId', products.findOne);

	// Retrieve a products with categoryId
	app.get('/api/products/:categoryId', products.findWithCategoryId);

	// Update a product with productId
	app.put('/api/products/:productId', products.update);

	// Delete a produt with productId
	app.delete('/api/products/:productId', products.delete);
}