const express = require('express');
const router = express.Router();
const controller = require('../Controllers/users.controllers');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify_token', controller.verify_token);
router.post("/favRecipes/add", controller.addFavRecipe);
router.post("/getFavRecipes", controller.getFavRecipes);
router.post("/deleteFavRecipe", controller.deleteFavRecipe);
router.post("/shoppingList/save", controller.saveShoppingList);
router.post("/shoppingList/get", controller.getShoppingList);
/* router.post("/shoppingList/delete", controller.deleteShoppingList); */

module.exports = router; 