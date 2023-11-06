import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();
const secret = process.env.SECRET || "default-secret";


export default function authenticateToken(req:any, res:any, next:any) {
  const token = req.signedCookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Accesso negato" });
  }

  jwt.verify(token, secret, (err:any, decoded:any) => {
    if (err) {
      return res.status(401).json({ message: "Accesso negato" });
    }
    req.user = decoded; // Ora puoi accedere alle informazioni dell'utente in req.user
    next();
  });
}

