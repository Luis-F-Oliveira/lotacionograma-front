import { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { AxiosContext } from '@context'
import Cookies from "js-cookie"

const ButtonTheme = () => {
    const [ theme, setTheme ] = useState(false)
    const [ id, setId ] = useState(0)
    const { api } = useContext(AxiosContext)
    const token = Cookies.get('jwt')

    useEffect(() => {
        const fetchData = async () => {
            const axios = await api.get('user', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                setTheme(response.data.darktheme)
                setId(response.data.id)
            })
        }
        fetchData()
    }, [api])

    const handleTheme = async () => {
        const axios = await api.put(`darkmode/${id}`, null, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            } 
        })

        location.reload()
    }

    return (
        <button onClick={handleTheme} className="bg-slate-950 text-amber-500 dark:bg-amber-500 dark:text-slate-950 w-full mx-3 py-1 rounded-md transition-all">
            { theme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
        </button>
    )
}

export default ButtonTheme