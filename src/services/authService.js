import { modelUser } from '../models/modelUser.js'
import { hashPassword, comparePassword } from '../utils/bcrypt.js'

const authService = {
  findUserByEmail: async (email, password) => {
    const user = await modelUser.findUserByEmail(email)
    if (!user) throw new Error('Email invalido')

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) throw new Error('Contraseña incorrecta')

    const { password: _, ...publicUser } = user
    return publicUser
  },

  createUser: async (rol, nombres, apellidos, email, password) => {
    const user = await modelUser.findUserByEmail(email)
    if (user) throw new Error('El usuario ya existe')

    const hashedPassword = await hashPassword(password)
    const newUser = await modelUser.createUser({ rol, nombres, apellidos, email, password: hashedPassword })
    if (!newUser) throw new Error('Error al crear el usuario')
    return newUser
  },

  getUser: async () => {
    const data = await modelUser.findAllUsers()
    return data
  }
}

export { authService }
