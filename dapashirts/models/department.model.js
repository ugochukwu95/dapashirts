const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
	name: {
            type: String,
            required: true,
            unique: true
        },
	description: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model('Department', DepartmentSchema);