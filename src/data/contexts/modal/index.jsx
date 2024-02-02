import { useState, useContext, createContext } from 'react'
import { Modal } from '@components'

const ModalContext = createContext()

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal deve ser usado dentro de um ModalProvider")
    }
    return context
}

export const ModalProvider = ({ children }) => {
    const [ open, setOpen ] = useState(false)
    const [ infos, setInfos ] = useState({ width: 'w-1/4', height: 'h-1/4', title: 'Nan' })
    const [ content, setContent ] = useState(null)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleModal = (width, height, tittle, content) => {    
        setInfos({
            ...infos,
            width: width,
            height: height,
            title: tittle
        })

        setContent(content)

        handleOpen()
    }

    return (
        <ModalContext.Provider value={{ infos, content, handleModal, handleOpen }}>
            { open ? (
                <Modal />
            ) : null}
            { children }
        </ModalContext.Provider>
    )
}