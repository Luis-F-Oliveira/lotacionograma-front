import { useState, useContext, createContext } from 'react'

const MenuContext = createContext()

export const useMenu = () => {
    const context = useContext(MenuContext)
    if (!context) {
        throw new Error("useMenu deve ser usado dentro de um MenuProvider")
    }
    return context
}

export const MenuProvider = ({ children }) => {
    const [settings, setSettings] = useState(false)
    const [activeOption, setActiveOption] = useState(null)

    const toggleOption = (value) => {
        setActiveOption((prevOption) => (prevOption === value ? null : value))
    }

    const handleToggleSettings = () => {
        setSettings(!settings)

        if (settings) {
            setActiveOption(null)
        }
    }

    return (
        <MenuContext.Provider value={{ activeOption, settings, toggleOption, handleToggleSettings }}>
            { children }
        </MenuContext.Provider>
    )
}