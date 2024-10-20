import { db } from '../config/db.js'

const modelUser = {
  findAllUsers: async () => {
    const [users] = await db.query('SELECT * FROM usuarios')
    return users
  },

  findUserById: async (id) => {
    const [user] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id])
    return user[0]
  },

  findUserByEmail: async (email) => {
    const [user] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email])
    return user[0]
  },

  createUser: async (user) => {
    const [id] = await db.query('INSERT INTO usuarios (roles_id, nombres, apellidos, email, password) VALUES (?, ?, ?, ?, ?)',
      [user.rol, user.nombres, user.apellidos, user.email, user.password])
    return id.insertId
  }
}

export { modelUser }
