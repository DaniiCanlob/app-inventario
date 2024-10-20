import { db } from '../config/db.js'

const modelUser = {
  // Obtener todos los usuarios
  findAllUsers: async () => {
    const [users] = await db.query('SELECT * FROM usuarios')
    return users
  },

  // Encontrar un usuario por su ID
  findUserById: async (id) => {
    const [user] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id])
    return user[0]
  },

  // Encontrar un usuario por su email
  findUserByEmail: async (email) => {
    const [user] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email])
    return user[0]
  },

  // Crear un nuevo usuario
  createUser: async (user) => {
    const [result] = await db.query('INSERT INTO usuarios (roles_id, nombres, apellidos, email, password) VALUES (?, ?, ?, ?, ?)',
      [user.rolId, user.nombres, user.apellidos, user.email, user.password])
    return result.insertId
  },

  // Actualizar la información de un usuario
  updateUser: async (id, user) => {
    await db.query('UPDATE usuarios SET roles_id = ?, nombres = ?, apellidos = ?, email = ?, password = ? WHERE id_usuario = ?',
      [user.rol, user.nombres, user.apellidos, user.email, user.password, id])
    return true
  },

  // Eliminar un usuario por su ID
  deleteUser: async (id) => {
    await db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id])
    return true
  }
}

export { modelUser }
