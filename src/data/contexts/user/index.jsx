import { useContext, useState, useEffect, createContext }  from 'react'
import { AxiosContext } from '@context'
import Cookies from 'js-cookie'

const UserContext = createContext()

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser deve ser usado dentro de um UserProvider")
    }
    return context
}

export const UserProvider = ({ children }) => {
    const token = Cookies.get('jwt')
    const { api } = useContext(AxiosContext)
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    })
    
    useEffect (() => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    const loginUser = (userData) => {
        setUser({...userData, theme: userData.theme})
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logoutUser = async () => {
        setUser(null)
        localStorage.removeItem('user')

        await api.post('logout', null, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            }
        })
        location.reload() 
    }

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    )
}