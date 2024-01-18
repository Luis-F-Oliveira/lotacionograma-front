import { useContext } from 'react'
import { AxiosContext } from '@context'

class authService
{
    static async authenticate (email, password)
    {
        console.log(email, password)
    }

    static async isAuthenticated()
    {

    }

    static async logout()
    {

    }
}

export default authService