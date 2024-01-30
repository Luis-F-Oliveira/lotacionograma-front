import { useState, useContext, createContext } from 'react'

const SidebarContext = createContext()

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar deve ser usado dentro de um SidebarProvider")
    }
    return context
}

export const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [activeOption, setActiveOption] = useState(null)

    const handleOpen = () => {
        setOpen(!open)

        setActiveOption(null)
    }

    const toggleOption = (value) => {
        setActiveOption((prevOption) => (prevOption === value ? null : value))
    }

    return (
        <SidebarContext.Provider value={{ open, activeOption, handleOpen, toggleOption }}>
            { children }
        </SidebarContext.Provider>
    )
}