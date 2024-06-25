const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	favRecipes : [{
		label: String,
		image: String,
		calories: String,
		viewRecipe: String
	}]
},
{strictQuery: false}
)

module.exports = mongoose.model('users', userSchema);
