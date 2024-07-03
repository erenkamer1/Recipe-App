const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	favRecipes: { type: Array, default: [] }
},
{strictQuery: false}
)

module.exports = mongoose.model('users', userSchema);
