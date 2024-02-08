/* En déclarant ces interfaces de cette manière, le développeur peut utiliser 
_id et isAdmin propriétés dans leur code sans provoquer d'erreurs de type. Cela peut être utile pour 
implémenter des fonctionnalités nécessitant une authentification et une autorisation utilisateur.*/

import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      _id?: string | null
      isAdmin?: boolean
    } & DefaultSession['user']
  }

  export interface User extends DefaultUser {
    _id?: string
    isAdmin?: boolean
  }
}