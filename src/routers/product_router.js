import express from 'express'

import getProductController from '../controllers/product/getProductController.js'
import createProductController from '../controllers/product/createProductController.js'
import updateProductController from '../controllers/product/updateProductController.js'
import deleteProductController from '../controllers/product/deleteProductController.js'
import changeTypeProductController from '../controllers/product/changeTypeProductController.js'

const router = express.Router()

router.get('/', getProductController)
router.post('/', createProductController)
router.put('/', updateProductController)
router.delete('/:id', deleteProductController)
router.patch('/type', changeTypeProductController)

export default router