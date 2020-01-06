const Order = require('../models/order.model.js');

// Create and Save a new Order
exports.create = (req, res) => {
	// Validate request
	if (req.body.products === 0) {
		return res.status(400).send({
            error: "Products cannot be empty"
        });
	}
    else if (!req.body.name) {
        return res.status(400).send({
            error: "Customer name cannot be empty"
        });
    }
    else if (!req.body.email) {
    	return res.status(400).send({
            error: "Email cannot be empty"
        });
    }

    // Create an Order
    const order = new Order({
        name: req.body.name, 
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        products: req.body.products,
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the order."
        });
    });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
	Order.find()
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving orders."
        });
    });
};

// Find a single order with a orderId
exports.findOne = (req, res) => {
	Order.findById(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving order with id " + req.params.orderId
        });
    });
};

// Update a order identified by the orderId in the request
exports.update = (req, res) => {
	// Validate request
    if (req.body.products === 0) {
        return res.status(400).send({
            error: "Products cannot be empty"
        });
    }
    else if (!req.body.name) {
        return res.status(400).send({
            error: "Customer name cannot be empty"
        });
    }
    else if (!req.body.email) {
        return res.status(400).send({
            error: "Email cannot be empty"
        });
    }

    // Find Order and update it with the request body
    Order.findByIdAndUpdate(req.params.orderId, {
        name: req.body.name, 
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        products: req.body.products,
    }, {new: true})
    .then(prod => {
        if(!prod) {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });
        }
        res.send(prod);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            error: "Error updating order with id " + req.params.orderId
        });
    });
};

// Delete a order with the specified orderId in the request
exports.delete = (req, res) => {
	Order.findByIdAndRemove(req.params.orderId)
    .then(prod => {
        if(!prod) {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });
        }
        res.send({message: "Order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                error: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            error: "Could not delete order with id " + req.params.orderId
        });
    });
};