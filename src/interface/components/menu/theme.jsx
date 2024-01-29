import { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { AxiosContext, useUser } from '@context'
import Cookies from "js-cookie"

const ButtonTheme = () => {
    const { api } = useContext(AxiosContext)
    const { user, loginUser } = useUser()
    const token = Cookies.get('jwt')

    const handleTheme = async () => {
        await api.put(`mode/${user.id}`, null, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            } 
        })
        loginUser({ ...user, theme: !user.theme })
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
            { user.theme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
        </button>
    )
}

export default ButtonTheme