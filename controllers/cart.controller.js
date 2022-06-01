const Cart = require("../moduls/Cart.modul");
const Drugs = require("../moduls/Drugs.modul");
const User = require("../moduls/User.modul");

module.exports.cartController = {
    postCart: async (req, res) => {
        try {
            await Cart.create({
                user: req.body.user
            });
            res.json('Корзина успешно создана')
        } catch (error) {
            res.json('Ошибка при создании корзины')
        }
    },
    addDrugs: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id)
            const drugs = await Drugs.findById(req.body.product)
            const user = await User.findById(cart.user)


            if (drugs.recept) {
                if (user.isRecepte) {
                    await Cart.findByIdAndUpdate(req.params.id, {
                        $push: { product: req.body.product },
                        $set: { sum: cart.sum + drugs.price },
                    })
                    res.json('Лекарство добавлено в корзину')

                } else {
                    res.json('У вас нет рецепта на это лекарство')
                }

            } else {
                await Cart.findByIdAndUpdate(req.params.id, {
                    $push: { product: req.body.product },
                    $set: { sum: cart.sum + drugs.price },
                })
                res.json('Лекарство добавлено в корзину')
            }


            res.json('error')
        } catch (error) {
            res.json(error)
        }
    },
    returnDrugs: async (req, res) => {
        try {
            const drugs = await Drugs.findById(req.body.product)
            const cart = await Cart.findByIdAndUpdate(req.params.id)
            if (cart.product.includes(req.body.product)) {
                await Cart.findByIdAndUpdate(cart, {
                    $pull: { product: req.body.product },
                    sum: cart.sum - drugs.price
                })
                res.json('Лекарство удалено из корзины')
            }
        } catch (error) {
            res.json(error)
        }
    },
    clearnCart: async (req, res) => {
        try {
            await Cart.findByIdAndUpdate(req.params.id, {
                product: [],
                sum: null
            })
            res.json('Корзина очищена')
        } catch (error) {
            res.json(error)
        }
    },
    buyDrygs: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id)
            const user = await User.findById(req.params.userId)

            if (cart.sum > user.cash) {
                res.json('У вас не достаточно денег')
            }
            await User.findByIdAndUpdate(cart.user, {
                cash: user.cash - cart.sum
            })
            await Cart.findByIdAndUpdate(cart.user, {
                product: [],
                sum: null
            })
            res.json('Покупка совершена')
        } catch (error) {

        }
    },
    topUpCash: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            User.findByIdAndUpdate(req.params.id, {
                cash: user.cash + req.body.cash
            })
            res.json('Вы пополнили баланас')
        } catch (error) {
            res.json(error)
        }
    }

}