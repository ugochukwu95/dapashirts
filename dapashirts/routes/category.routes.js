module.exports = (app) => {
	const categories = require('../controllers/category.controllers.js');

	// Create a new category
	app.post('/api/categories', categories.create);

	// Retrieve all categories
	app.get('/api/categories', categories.findAll);

	// Retrieve a single category with categoryId
	app.get('/api/categories/:categoryId', categories.findOne);

	// Retrieve a single category with departmentId
	app.get('/api/categories/:departmentId', categories.findOneWithDepartmentId);

	// Update a category with categoryId
	app.put('/api/categories/:categoryId', categories.update);

	// Delete a category with categoryId
	app.delete('/api/categories/:categoryId', categories.delete);
}