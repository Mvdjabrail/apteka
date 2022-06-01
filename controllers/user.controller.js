const Cart = require('../moduls/Cart.modul')
const User = require('../moduls/User.modul')

module.exports.userController = {
    postUser: async (req, res) => {
        try {
            const postUser = await User.create({
                name: req.body.name,
                cash: req.body.cash,
                isRecepte: req.body.isRecepte
            })
            await Cart.create({
                user: postUser._id
            })
            res.json(postUser)
        } catch (error) {
            res.json(error)
        }

    },
    patchUser: async (req, res) => {
        try {
            const patchUser = User.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                cash: req.body.cash,
                isRecepte: req.body.isRecepte
            })
            res.json(patchUser)
        } catch (error) {
            res.json(error)
        }
    },
    getUser: async (req, res) => {
        try {
            const getUser = User.find()
            res.json(getUser)
        } catch (error) {
            res.json(error)
        }
    }

}