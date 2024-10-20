import { db } from '../config/db.js'

const modelProduct = {
  // Obtener todos los productos
  findAllProducts: async () => {
    const [products] = await db.query('SELECT * FROM productos')
    return products
  },

  // Encontrar un producto por su ID
  findProductById: async (id) => {
    const [product] = await db.query('SELECT * FROM productos WHERE id_productos = ?', [id])
    return product[0]
  },

  // Crear un nuevo producto
  createProduct: async (product) => {
    const [result] = await db.query('INSERT INTO productos (categoria_id, nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?, ?)',
      [product.categoriaId, product.nombre, product.descripcion, product.precio, product.cantidad]) 
    return result.insertId
  },

  // Actualizar la información de un producto
  updateProduct: async (id, product) => {
    console.log(id, product)
    const [result] = await db.query('UPDATE productos SET categoria_id = ?, nombre = ?, descripcion = ?, precio = ?, cantidad = ? WHERE id_productos = ?',
      [product.categoriaId, product.nombre, product.descripcion, product.precio, product.cantidad, id]) 
    return result.affectedRows
  },

  // Eliminar un producto por su ID
  deleteProduct: async (id) => {
    const [result] = await db.query('DELETE FROM productos WHERE id_productos = ?', [id])
    return result.affectedRows
  }
}

export { modelProduct }
