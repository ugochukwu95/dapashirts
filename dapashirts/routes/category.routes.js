module.exports = (app) => {
	const categories = require('../controllers/category.controllers.js');

	// Create a new category
	app.post('/categories', categories.create);

	// Retrieve all categories
	app.get('/categories', categories.findAll);

	// Retrieve a single category with categoryId
	app.get('/categories/:categoryId', categories.findOne);

	// Retrieve a single category with departmentId
	app.get('/categories/:departmentId', categories.findOneWithDepartmentId);

	// Update a category with categoryId
	app.put('/categories/:categoryId', categories.update);

	// Delete a category with categoryId
	app.delete('/categories/:categoryId', categories.delete);
}