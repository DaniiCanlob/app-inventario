import express from 'express'
import { authRoutes } from './authRoutes.js'
import { roleRoutes } from './roleRoutes.js'
import { productRoutes } from './productRoutes.js'
import { productHistoryRoutes } from './ProductHistoryRoutes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/roles', roleRoutes)
router.use('/productos', productRoutes)
router.use('/historial-productos', productHistoryRoutes)

export { router }
