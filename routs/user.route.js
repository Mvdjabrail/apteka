const { Router } = require("express");
const { userController } = require("../controllers/user.controller");

const router = Router();

router.post('/user', userController.postUser)
router.patch('/user/:id', userController.patchUser)
router.get('/user', userController.getUser)

module.exports = router