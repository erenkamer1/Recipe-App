const User = require("../Models/users.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { email, password, password2 } = req.body;
  if (!email || !password || !password2) {
    return res.json({ ok: false, message: "All fields required" });
  }
  if (password !== password2) {
    return res.json({ ok: false, message: "Passwords must match" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) return res.json({ ok: false, message: "User exists!" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
      email,
      password: hash,
    };
    await User.create(newUser);
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email provided" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ ok: false, message: "Invalid user provided" });

    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      const token = jwt.sign({ userEmail: user.email }, jwt_secret, {
        expiresIn: "1h",
      });
      res.json({ ok: true, message: "welcome back", token, email });
    } else return res.json({ ok: false, message: "Invalid data provided" });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

const verify_token = (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "Token is corrupted" })
      : res.json({ ok: true, succ });
  });
};

const addFavRecipe = async (req, res) => {
  const { email, favRecipes } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { favRecipes });
    res.send({ ok: true });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

const getFavRecipes = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    res.send({ ok: true, favRecipes: user.favRecipes || [] });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

const deleteFavRecipe = async (req, res) => {
  const { email, favRecipes } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { favRecipes });
    res.send({ ok: true, data: user.favRecipes });
  } catch (error) {
    res.json({ ok: false, error: " error ==>> ", error });
  }
};

const saveShoppingList = async (req, res) => {
  const { email, shoppingList } = req.body;
  try {
    console.log("Saving shopping list for:", email, shoppingList);
    const user = await User.findOneAndUpdate({ email }, { shoppingList });
    res.send({ ok: true, shoppingList });
  } catch (error) {
    console.log("Error saving shopping list:", error);
    res.json({ ok: false, error });
  }
};

const getShoppingList = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log("Retrieved shopping list for:", email, user.shoppingList);
    res.send({ ok: true, shoppingList: user.shoppingList || [] });
  } catch (error) {
    console.log("Error retrieving shopping list:", error);
    res.json({ ok: false, error });
  }
};
// controllers/users.controllers.js

const deleteShoppingList = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { shoppingList: [] }, { new: true });
    res.json({ ok: true, message: 'Shopping list deleted successfully', shoppingList: user.shoppingList });
  } catch (error) {
    console.error('Error deleting shopping list:', error);
    res.json({ ok: false, error });
  }
};

module.exports = { register, login, verify_token, addFavRecipe, getFavRecipes, deleteFavRecipe, saveShoppingList, getShoppingList, deleteShoppingList };
