const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.post('/admin/category', categoryController.postCategory)
router.get('/admin/category', categoryController.getCategoty)
router.get('/admin/category/:id', categoryController.getCategotyById)
router.patch('/admin/category/:id', categoryController.patchCategory)
router.delete('/admin/category/:id', categoryController.deleteCategory)

module.exports = router;