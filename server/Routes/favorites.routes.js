const router = require("express").Router()
const controller = require("../Controllers/favorites.controllers");


router.post("/add", controller.addToFav)
router.get("/:userId", controller.getFavRecipes);

module.exports = router;