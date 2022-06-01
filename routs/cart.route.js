const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller");

const router = Router();

router.post('/cart', cartController.postCart)
router.patch('/user/:id/drug', cartController.addDrugs)
router.patch('/returnDrugs/:id', cartController.returnDrugs)
router.patch('/user/:Id', cartController.clearnCart)
router.patch('/user/:id/cart/:id', cartController.buyDrygs)
router.patch('/cash/user/:id', cartController.topUpCash)

module.exports = router