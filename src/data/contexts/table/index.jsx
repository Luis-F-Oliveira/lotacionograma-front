import { useState, useContext, createContext } from 'react'
import { AxiosContext } from '..'
import Cookies from 'js-cookie'

const TableContext = createContext()

export const useTable = () => {
    const context = useContext(TableContext)
    if (!context) {
        throw new Error("useTable deve ser usado dentro de um TableProvider")
    }
    return context
}

export const TableProvider = ({ children }) => {
    const [ data, setData ] = useState([])
    const { api } = useContext(AxiosContext)
    const token = Cookies.get('jwt')

    const getApi = async (url) => {
        try {
            const response = await api.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setData(response.data.servants)
        } catch (error) {
            console.log(error)            
        }
    }

    return (
        <TableContext.Provider value={{ data, getApi }}>
            { children }
        </TableContext.Provider>
    )
}