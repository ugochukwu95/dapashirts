const Product = require('../models/product.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
	// Validate request
	if (!req.body.categoryId) {
		return res.status(400).send({
            error: "categoryId cannot be empty"
        });
	}
    else if (!req.body.name) {
        return res.status(400).send({
            error: "Product name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Product description cannot be empty"
        });
    }

    // Create a Product
    const product = new Product({
    	category_id: req.body.categoryId,
        name: req.body.name, 
        description: req.body.description,
        price: Number(req.body.price).toFixed(2),
        discounted_price: Number(req.body.discountedPrice).toFixed(2),
        image: req.body.image,
        image_2: req.body.image_2,
        thumbnail: req.body.thumbnail,
        display: Number(req.body.display)
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
	Product.find()
    .then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
	Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving product with id " + req.params.productId
        });
    });
};

// find product with categoryId
exports.findWithCategoryId =(req, res) => {
	Product.find({category_id: req.params.categoryId})
    .then(product => {
        if(product.length) {
            return res.status(404).send({
                error: "Product not found with categoryId " + req.params.categoryId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Product not found with categoryId " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving product with categoryId " + req.params.categoryId
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body.categoryId) {
		return res.status(400).send({
            error: "categoryId cannot be empty"
        });
	}
    else if(!req.body.name) {
        return res.status(400).send({
            error: "Product name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Product description cannot be empty"
        });
    }

    // Find Product and update it with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        category_id: req.body.categoryId,
        name: req.body.name, 
        description: req.body.description,
        price: Number(req.body.price).toFixed(2),
        discounted_price: Number(req.body.discountedPrice).toFixed(2),
        image: req.body.image,
        image_2: req.body.image_2,
        thumbnail: req.body.thumbnail,
        display: Number(req.body.display)
    }, {new: true})
    .then(prod => {
        if(!prod) {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });
        }
        res.send(prod);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            error: "Error updating product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
	Product.findByIdAndRemove(req.params.productId)
    .then(prod => {
        if(!prod) {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                error: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            error: "Could not delete product with id " + req.params.productId
        });
    });
};