import { db } from '../config/db.js'

const modelRole = {
  // Obtener todos los roles
  findAllRoles: async () => {
    const [roles] = await db.query('SELECT * FROM roles')
    return roles
  },

  // Encontrar un rol por su ID
  findRoleById: async (id) => {
    const [role] = await db.query('SELECT * FROM roles WHERE id_roles = ?', [id])
    return role[0]
  },

  // Crear un nuevo rol
  createRole: async (role) => {
    const [result] = await db.query('INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)',
      [role.nombreRol, role.descripcion])
    return result.insertId
  },

  // Actualizar la información de un rol
  updateRole: async (id, role) => {
    await db.query('UPDATE roles SET nombre_rol = ?, descripcion = ?, status = ? WHERE id_roles = ?',
      [role.nombreRol, role.descripcion, role.status, id])
    return true
  },

  // Eliminar un rol por su ID
  deleteRole: async (id) => {
    await db.query('DELETE FROM roles WHERE id_roles = ?', [id])
    return true
  }
}

export { modelRole }
