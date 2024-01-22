import { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { AxiosContext, useUser } from '@context'
import Cookies from "js-cookie"

const ButtonTheme = () => {
    const [ theme, setTheme ] = useState(false)
    const [ id, setId ] = useState(0)
    const { api } = useContext(AxiosContext)
    const { user, loginUser } = useUser()
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
        loginUser({ ...user, theme: !theme })
        location.reload()
    }

    return (
        <button 
            onClick={handleTheme}
            className="mr-2 text-xl dark:text-amber-500
            dark:hover:text-amber-600 transition-colors
            duration-500 dark:active:text-amber-400
            text-purple-700 hover:text-purple-950
            active:text-purple-500"
        >
            { theme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
        </button>
    )
}

export default ButtonTheme