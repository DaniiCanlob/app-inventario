import { modelRole } from '../models/modelRole.js'

const roleService = {
  findAllRoles: async () => {
    const roles = await modelRole.findAllRoles()
    return roles
  },

  findRoleById: async (id) => {
    const role = await modelRole.findRoleById(id)
    if (!role) throw new Error('No se encontró el rol')
    return role
  },

  createRole: async (rol) => {
    const newRole = await modelRole.createRole(rol)
    if (!newRole) throw new Error('Error al crear el rol')
    return newRole
  },

  updateRole: async (id, rol) => {
    const updatedRole = await modelRole.updateRole(id, rol)
    if (!updatedRole) throw new Error('Error al actualizar el rol')
    return updatedRole
  },

  deleteRole: async (id) => {
    const deletedRole = await modelRole.deleteRole(id)
    if (!deletedRole) throw new Error('Error al eliminar el rol')
    return deletedRole
  }
}

export { roleService }
