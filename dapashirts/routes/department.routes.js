module.exports = (app) => {
	const departments = require('../controllers/department.controllers.js');

	// Create a new department
	app.post('/departments', departments.create);

	// Retrieve all departments
	app.get('/departments', departments.findAll);

	// Retrieve a single department with departmentId
	app.get('/departments/:departmentId', departments.findOne);

	// Update a department with departmentId
	app.put('/departments/:departmentId', departments.update);

	// Delete a department with departmentId
	app.delete('/departments/:departmentId', departments.delete);
}