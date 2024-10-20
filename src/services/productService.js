import { modelProduct } from '../models/modelProduct.js'

const productService = {
  findAllProducts: async () => {
    const products = await modelProduct.findAllProducts()
    if (!products) throw new Error('No hay productos para mostrar')
    return products
  },

  findProductById: async (id) => {
    const product = await modelProduct.findProductById(id)
    if (!product) throw new Error('No se encontró el producto')
    return product
  },

  createProduct: async (categoriaId, nombre, descripcion, precio, cantidad) => {
    const newProduct = await modelProduct.createProduct({ categoriaId, nombre, descripcion, precio, cantidad })
    if (!newProduct) throw new Error('Error al crear el producto')
    return newProduct
  },

  updateProduct: async (id, product) => {
    const updatedProduct = await modelProduct.updateProduct(id, product)
    if (!updatedProduct) throw new Error('No se encontró el producto para actualizar')
    return updatedProduct
  },

  deleteProduct: async (id) => {
    const deletedProduct = await modelProduct.deleteProduct(id)
    if (!deletedProduct) throw new Error('No se encontró el producto para eliminar')
    return deletedProduct
  }
}

export { productService }
