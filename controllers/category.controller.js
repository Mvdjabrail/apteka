const Category = require('../moduls/Category.modul')

module.exports.categoryController = {
    postCategory: async (req, res) => {
        try {
            const cat = await Category.create({
                name: req.body.name,
                discription: req.body.discription
            })
            res.json(cat)
        } catch (error) {
            res.json(error)
        }
    },
    getCategoty: async (req, res) => {
        try {
            const getCat = await Category.find()
            res.json(getCat)
        } catch (error) {
            res.json(error)
        }
    },
    getCategotyById: async (req, res) => {
        try {
            const getById = await Category.findById(req.params.id)
            res.json(getById)
        } catch (error) {
            res.json(error)
        }
    },
    patchCategory: async (req, res) => {
        try {
            const patchCategory = await Category.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                discription: req.body.discription
            })
            res.json(patchCategory)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const deleteCategory = Category.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        } catch (error) {
            res.json(error)
        }
    }
}