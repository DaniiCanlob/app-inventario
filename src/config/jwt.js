import { config } from 'dotenv'

config()

export const keyAccessSecret = process.env.ACCESS_TOKEN_SECRET ?? ''
export const accessTokenExpiry = '8h'
