import express from 'express'
import { productHistoryController } from '../controllers/ProductHistoryController.js'

const productHistoryRoutes = express.Router()

productHistoryRoutes.get('/', productHistoryController.findAllHistory)
productHistoryRoutes.get('/:id', productHistoryController.findHistoryByProductId)
productHistoryRoutes.post('/', productHistoryController.createHistory)

export { productHistoryRoutes }