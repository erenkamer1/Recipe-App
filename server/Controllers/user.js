const User = require("../Models/Users")

class userController {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
            res.send(users)
            } catch (error) {
                console.log(error)
                res.status(500).send({ message: "Error fetching users" })
                }
            }

        async userMatch (req, res) {
            try {
                const { id } = req.params
                const user = await User.findById(id)
                if (!user) {
                    return res.status(404).send({ message: "User not found" })
                    } else {
                        const matches = await User.find({ id: id})
                        res.send(`user  ==> ${matches}`)
                    }
            } catch (e) {
                console.log(e)
                res.send(e)
            }
        }
};


module.exports = new userController();