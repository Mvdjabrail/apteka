const { Router } = require("express");
const { drugsController } = require("../controllers/drugs.controller");

const router = Router();

router.post('/admin/drug', drugsController.postDrug)
router.get('/admin/drug/:id', drugsController.getDrugById)
router.get('/admin/drug', drugsController.getDrug)
router.delete('/admin/drug/:id', drugsController.deleteDrug)
router.get('/admin/drug/category/:id', drugsController.getDrugByCat)
router.patch('/admin/drug/:id', drugsController.patchDrug)

module.exports = router