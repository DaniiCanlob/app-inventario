import { z } from 'zod'
import { productHistoryService } from '../services/ProductHistoryService.js'

const productHistorySchema = z.object({
  producto_id: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "id producto requerido" })),
  usuario_id: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "id usuario requerido" })),
  change_type: z.string().min(1, { message: "tipo de cambio requerido" }),
})

const productHistoryController = {
  findAllHistory: async (req, res) => {
    try {
      const history = await productHistoryService.findAllHistory()
      res.status(200).json({ history })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el historial de productos', error: error.message })
    }
  },

  findHistoryByProductId: async (req, res) => {
    try {
      const { id } = req.params
      const history = await productHistoryService.findHistoryByProductId(id)
      res.status(200).json({ history })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el historial del producto', error: error.message })
    }
  },

  createHistory: async (req, res) => {
    try {
      productHistorySchema.parse(req.body)
      const { producto_id, usuario_id, change_type, fecha_hora } = req.body
      const newHistory = await productHistoryService.createHistory({ producto_id, usuario_id, change_type, fecha_hora })
      res.status(201).json({ message: 'Historial creado', newHistory })
    } catch (error) {
      const errorMessages = error instanceof z.ZodError ? error.errors.map(err => err.message) : [error.message]
      const statusCode = error instanceof z.ZodError ? 400 : 500
      res.status(statusCode).json({ message: 'Error al crear el historial del producto', error: error })
    }
  }
}

export { productHistoryController }