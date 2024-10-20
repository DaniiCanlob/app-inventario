import { createConnection } from 'mysql2/promise'
import { config } from 'dotenv'

config()

async function connectDB () {
  try {
    const db = await createConnection({
      host: process.env.DB_HOST ?? 'localhost',
      user: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? '',
      database: process.env.DB_NAME ?? ''
    })
    console.log('Conectado a la base de datos MySQL')
    return db
  } catch (err) {
    console.error('Error, no se pudo conectar a la Base de Datos:', err)
    process.exit(1)
  }
}

const db = await connectDB()

export { db }
