const Department = require('../models/department.model.js');

// Create and Save a new Department
exports.create = (req, res) => {
	// Validate request
    if(!req.body.name) {
        return res.status(400).send({
            error: "Department name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Department description cannot be empty"
        });
    }

    // Create a Department
    const department = new Department({
        name: req.body.name, 
        description: req.body.description
    });

    // Save Department in the database
    department.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Department."
        });
    });
};

// Retrieve and return all departments from the database.
exports.findAll = (req, res) => {
	Department.find()
    .then(department => {
        res.send(department);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving departments."
        });
    });
};

// Find a single department with a departmentId
exports.findOne = (req, res) => {
	Department.findById(req.params.departmentId)
    .then(department => {
        if(!department) {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });            
        }
        res.send(department);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            error: "Error retrieving department with id " + req.params.departmentId
        });
    });
};

// Update a department identified by the departmentId in the request
exports.update = (req, res) => {
	// Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            error: "Department name cannot be empty"
        });
    }
    else if (!req.body.description) {
    	return res.status(400).send({
            error: "Department description cannot be empty"
        });
    }

    // Find Department and update it with the request body
    Department.findByIdAndUpdate(req.params.departmentId, {
        name: req.body.name,
        description: req.body.description
    }, {new: true})
    .then(department => {
        if(!department) {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });
        }
        res.send(department);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            error: "Error updating Department with id " + req.params.departmentId
        });
    });
};

// Delete a department with the specified departmentId in the request
exports.delete = (req, res) => {
	Department.findByIdAndRemove(req.params.departmentId)
    .then(dept => {
        if(!dept) {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });
        }
        res.send({message: "Department deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                error: "Department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            error: "Could not delete department with id " + req.params.departmentId
        });
    });
};