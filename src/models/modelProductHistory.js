import { db } from '../config/db.js'

const modelProductHistory = {
  // Obtener todo el historial de productos
  findAllHistory: async () => {
    const [history] = await db.query('SELECT * FROM product_history')
    return history
  },

  // Encontrar el historial de un producto por su ID de producto
  findHistoryByProductId: async (id) => {
    const [history] = await db.query('SELECT * FROM product_history WHERE producto_id = ?', [id])
    return history
  },

  // Crear una nueva entrada en el historial de productos
  createHistory: async (history) => {
    const [result] = await db.query('INSERT INTO product_history (producto_id, usuario_id, change_type) VALUES (?, ?, ?)',
      [history.producto_id, history.usuario_id, history.change_type])
    return result.insertId
  }
}

export { modelProductHistory }
