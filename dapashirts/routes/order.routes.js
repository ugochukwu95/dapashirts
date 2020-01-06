module.exports = (app) => {
	const orders = require('../controllers/order.controllers.js');

	// Create a new order
	app.post('/orders', orders.create);

	// Retrieve all orders
	app.get('/orders', orders.findAll);

	// Retrieve a single order with orderId
	app.get('/orders/:orderId', orders.findOne);

	// Update an order with orderId
	app.put('/orders/:orderId', orders.update);

	// Delete an order with orderId
	app.delete('/orders/:orderId', orders.delete);
}