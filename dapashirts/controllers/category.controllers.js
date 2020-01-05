const Category = require('../models/category.model.js');

// Create and Save a new Category
exports.create = (req, res) => {
	// Validate request
	if (!req.body.departmentId) {
		return res.status(400).send({
            error: "departmentId cannot be empty"
        });
	}
    else if (!req.body.name) {
        return res.status(400).send({
            error: "Category name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Category description cannot be empty"
        });
    }

    // Create a Category
    const category = new Category({
    	department_id: req.body.departmentId,
        name: req.body.name, 
        description: req.body.description
    });

    // Save Category in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Category."
        });
    });
};

// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
	Category.find()
    .then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving categories."
        });
    });
};

// Find a single category with a categoryId
exports.findOne = (req, res) => {
	Category.findById(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving category with id " + req.params.categoryId
        });
    });
};

exports.findOneWithDepartmentId =(req, res) => {
	Category.findOne({department_id: req.params.departmentId})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                error: "Category not found with departmentId " + req.params.departmentId
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Category not found with departmentId " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving category with departmentId " + req.params.departmentId
        });
    });
};

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
	// Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            error: "Category name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Category description cannot be empty"
        });
    }

    // Find Category and update it with the request body
    Category.findByIdAndUpdate(req.params.categoryId, {
        name: req.body.name,
        description: req.body.description
    }, {new: true})
    .then(cat => {
        if(!cat) {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });
        }
        res.send(cat);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            error: "Error updating Category with id " + req.params.categoryId
        });
    });
};

// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
	Category.findByIdAndRemove(req.params.categoryId)
    .then(cat => {
        if(!cat) {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });
        }
        res.send({message: "Category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                error: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            error: "Could not delete category with id " + req.params.categoryId
        });
    });
};