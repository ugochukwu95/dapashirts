const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	name: {
		type: String,
        required: true
	},
	email: {
		type: String,
        required: true
	},
	address: {
		type: String,
        required: true
	},
	city: {
		type: String,
        required: true
	},
	country: {
		type: String,
        required: true
	},
	products: {
		type: Array,
		required: true
	}
});

module.exports = mongoose.model('Order', OrderSchema);