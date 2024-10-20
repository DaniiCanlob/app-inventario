import { z } from 'zod'
import { productService } from '../services/productService.js'

const productSchema = z.object({
  categoriaId: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "id categoria requerido" })),
  nombre: z.string().min(3, { message: "nombre requerido" }),
  descripcion: z.string().min(3, { message: "descripcion requerida" }),
  precio: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "precio requerido" })),
  cantidad: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "cantidad requerida" }))
})

const idProductSchema = z.object({
  idProduct: z.preprocess((val) => parseFloat(val), z.number().min(1, { message: "id producto requerido" }))
})

const productController = {
  findAllProducts: async (req, res) => {
    try {
      const products = await productService.findAllProducts()
      res.status(200).json({ products })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos', error: error.message })
    }
  },

  findProductById: async (req, res) => {
    try {
      const { id } = req.params
      const product = await productService.findProductById(id)
      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto', error: error.message })
    }
  },

  createProduct: async (req, res) => {
    try {
      productSchema.parse(req.body)
      const { categoriaId, nombre, descripcion, precio, cantidad } = req.body
      const newProduct = await productService.createProduct(categoriaId, nombre, descripcion, precio, cantidad)
      res.status(201).json({ message: 'Producto creado', newProduct })
    } catch (error) {
      const errorMessages = error instanceof z.ZodError ? error.errors.map(err => err.message) : [error.message]
      const statusCode = error instanceof z.ZodError ? 400 : 500
      res.status(statusCode).json({ message: 'Error al crear el producto', errors: errorMessages });
    }
  },

  updateProduct: async (req, res) => {
    try {
      //idProductSchema.parse(req.params)
      productSchema.parse(req.body)
      const { id } = req.params
      console.log(id)
      const { categoriaId, nombre, descripcion, precio, cantidad } = req.body
      const updatedProduct = await productService.updateProduct(id, { categoriaId, nombre, descripcion, precio, cantidad })
      res.status(200).json({ message: 'Producto actualizado', updatedProduct })
    } catch (error) {
      const errorMessages = error instanceof z.ZodError ? error.errors.map(err => err.message) : [error.message]
      const statusCode = error instanceof z.ZodError ? 400 : 500
      res.status(statusCode).json({ message: 'Error al actualizar el producto', error: errorMessages })
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { idProduct } = req.params.id
      const deletedProduct = await productService.deleteProduct(idProduct)
      res.status(200).json({ message: 'Producto eliminado', deletedProduct })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto', error: error.message })
    }
  }
}

export { productController }
