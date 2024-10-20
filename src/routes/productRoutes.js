import express from 'express'
import { productController } from '../controllers/productController.js'

const productRoutes = express.Router()

productRoutes.get('/', productController.findAllProducts)
productRoutes.get('/:id', productController.findProductById)
productRoutes.post('/', productController.createProduct)
productRoutes.put('/:id', productController.updateProduct)
productRoutes.delete('/:id', productController.deleteProduct)

export { productRoutes }