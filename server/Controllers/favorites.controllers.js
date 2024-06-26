/* const User = require("../Models/users.models");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

// the client is sending this body object
//  {
//     email: form.email,
//     password: form.password,
//     password2: form.password2
//  }
let favRecipes = []
const addToFav = async (req, res) => {
    const { recipe, userId} = req.body
    if(userId) {
        try {
            const user = await User.findById(userId)    
            favRecipes.push(recipe)
            await user.save()
            res.status(200).send(favRecipes);
        } catch (e) {
            res.send("error ==>>>", e)
        }
    }
}

const getFavRecipes = async (req, res) => {
    const {userId} = req.params
    try {
        const user = await User.findById(userId)
        if (userId) {
            res.send(user.favRecipes)
        }
        
    } catch (e) {
        res.send("error ==>>" , e)
    }
}

module.exports = {addToFav, getFavRecipes} */