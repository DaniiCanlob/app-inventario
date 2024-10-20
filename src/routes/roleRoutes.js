import express from 'express'
import { rolesController } from '../controllers/rolesController.js'

const roleRoutes = express.Router()

roleRoutes.get('/', rolesController.findAllRoles)
roleRoutes.get('/:id', rolesController.findRoleById)
roleRoutes.post('/', rolesController.createRole)
roleRoutes.put('/:id', rolesController.updateRole)
roleRoutes.delete('/:id', rolesController.deleteRole)

export { roleRoutes }
