module.exports = (app) => {
	const orders = require('../controllers/order.controllers.js');

	// Create a new order
	app.post('/api/orders', orders.create);

	// Retrieve all orders
	app.get('/api/orders', orders.findAll);

	// Retrieve a single order with orderId
	app.get('/api/orders/:orderId', orders.findOne);

	// Update an order with orderId
	app.put('/api/orders/:orderId', orders.update);

	// Delete an order with orderId
	app.delete('/api/orders/:orderId', orders.delete);
}