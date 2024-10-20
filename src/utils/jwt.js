import jwt from 'jsonwebtoken'
import { keyAccessSecret, accessTokenExpiry } from '../config/jwt.js'

const signToken = (payload) => {
  return jwt.sign(payload, keyAccessSecret, { expiresIn: accessTokenExpiry })
}

const verifyToken = (token) => {
  return jwt.verify(token, keyAccessSecret)
}

export { signToken, verifyToken }
