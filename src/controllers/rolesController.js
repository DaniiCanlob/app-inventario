import { z } from 'zod'
import { roleService } from '../services/roleService.js'

const roleSchema = z.object({
  nombreRol: z.string().min(3, 'El nombre del rol es requerido'),
  descripcion: z.string().min(3, 'La descripción del rol es requerida')
})

const rolesController = {
  findAllRoles: async (req, res) => {
    try {
      const roles = await roleService.findAllRoles()
      return res.status(200).json({ roles })
    } catch (err) {
      return res.status(400).json({ message: 'Error al obtener los roles', error: err.message })
    }
  },

  findRoleById: async (req, res) => {
    try {
      const { id } = req.params
      const role = await roleService.findRoleById(id)
      return res.status(200).json({ role })
    } catch (err) {
      return res.status(400).json({ message: 'Error al obtener el rol', error: err.message })
    }
  },

  createRole: async (req, res) => {
    try {
      roleSchema.parse(req.body)
      const { nombreRol, descripcion } = req.body
      const newRole = await roleService.createRole({ nombreRol, descripcion })
      return res.status(201).json({ message: 'Rol creado', newRole })
    } catch (err) {
      return res.status(400).json({ message: 'No se pudo crear el rol', error: err.message })
    }
  },

  updateRole: async (req, res) => {
    try {
      roleSchema.parse(req.body)
      const { id } = req.params
      const { nombreRol, descripcion, status } = req.body
      const updatedRole = await roleService.updateRole(id, { nombreRol, descripcion, status })
      return res.status(200).json({ message: 'Role actualizado', updatedRole })
    } catch (err) {
      return res.status(400).json({ message: 'Error al actualizar el rol', error: err.message })
    }
  },

  deleteRole: async (req, res) => {
    try {
      const { id } = req.params
      const deletedRole = await roleService.deleteRole(id)
      return res.status(200).json({ message: 'Role eliminado', deletedRole })
    } catch (err) {
      return res.status(400).json({ message: 'Error al eliminar el rol', error: err.message })
    }
  }
}

export { rolesController }
