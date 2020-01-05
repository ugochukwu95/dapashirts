const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
	department_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
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

module.exports = mongoose.model('Category', CategorySchema);