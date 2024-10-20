import { modelProductHistory } from '../models/modelProductHistory.js'

const productHistoryService = {
  findAllHistory: async () => {
    const history = await modelProductHistory.findAllHistory()
    if (!history) throw new Error('No hay historial de productos para mostrar')
    return history
  },

  findHistoryByProductId: async (id) => {
    const history = await modelProductHistory.findHistoryByProductId(id)
    if (!history) throw new Error('No se encontró el historial del producto')
    return history
  },

  createHistory: async (history) => {
    const newHistory = await modelProductHistory.createHistory(history)
    if (!newHistory) throw new Error('Error al crear el historial del producto')
    return newHistory
  }
}

export { productHistoryService }