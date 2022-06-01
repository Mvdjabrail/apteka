const Drugs = require('../moduls/Drugs.modul')

module.exports.drugsController = {
    postDrug: async (req, res) => {
        try {
            const postDrug = await Drugs.create({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                recept: req.body.recept
            })
            res.json(postDrug)

        } catch (error) {
            res.json(error)
        }
    },
    getDrugById: async (req, res) => {
        try {
            const getDrugsById = Drugs.findById(req.params.id)
            res.json(getDrugsById)
        } catch (error) {
            res.json(error)
        }
    },
    getDrug: async (req, res) => {
        try {
            const getDrugs = Drugs.find()
            res.json(getDrugs)
        } catch (error) {
            res.json(error)
        }
    },
    deleteDrug: async (req, res) => {
        try {
            const deleteDrugs = Drugs.findByIdAndRemove(req.params.id)
            res.json("Лекарство удалено")
        } catch (error) {
            res.json(error)
        }
    },
    getDrugByCat: async (req, res) => {
        try {
            const getDrugsByCat = Drugs.findById({ category: req.params.id })
            res.json(getDrugsByCat)
        } catch (error) {
            res.json(error)
        }
    },
    patchDrug: async (req, res) => {
        try {
            const patchDrug = Drugs.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                recept: req.body.recept
            })
            res.json(patchDrug)
        } catch (error) {
            res.json(error)
        }
    }
}