import { useState, useContext, createContext } from 'react'
import { AxiosContext } from '..'
import { toastify } from '@/interface/components'
import { useUser } from '..'
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
    const { user } = useUser()
    const token = Cookies.get('jwt')

    const getApi = async (url) => {
        try {
            const response = await api.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setData(response.data.data)
        } catch (error) {
            console.log(error)            
        }
    }

    const postApi = async (url, option, column, value, type) => {
        try {
            const response = await api.post(url, {
                option, column, value, type
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setData([response.data.data])
        } catch (error) {
            if (error.response.status) {
                toastify('Servidor não econtrado', 'error', user.theme)
            }
        }
    }

    return (
        <TableContext.Provider value={{ data, getApi, postApi }}>
            { children }
        </TableContext.Provider>
    )
}