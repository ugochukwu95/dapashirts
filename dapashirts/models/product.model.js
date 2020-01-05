const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	category_id: {
			type: [mongoose.Schema.Types.ObjectId],
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
        },
	price: {
            type: Number,
            required: true
        },
	discounted_price: {type: Number, default: 0.00},
	image: String,
	image_2: String,
	thumbnail: String,
	display: { type: Number, min: 0, max: 3, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);