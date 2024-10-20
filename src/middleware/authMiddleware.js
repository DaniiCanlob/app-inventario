import { verifyToken } from '../utils/jwt.js'

const authMiddleware = (req, res, next) => {
  /* const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1] */
  const tokenCookies = req.cookies.access_token
  if (!tokenCookies) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    const decoded = verifyToken(tokenCookies)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

export { authMiddleware }
