import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useSidebar } from '@context'
import { useState } from "react"

const Navlink = ({ icon, to, children }) => {
  const { open } = useSidebar()
  const [ isMouserOver, setIsMouseOver ] = useState(false)

  const handleMouseOver = () => {
    setIsMouseOver(true)
  }

  const handleMouseOut = () => {
    setIsMouseOver(false)
  }

  return (
    <div className={`relative mb-2 flex ${ open ? 'justify-start' : 'justify-center pl-1.5'}`}>
        <Link 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className='text-sm text-emerald-500 dark:text-white
            hover:text-emerald-800 transition-colors dark:hover:text-white
            flex items-center' 
            to={to}
        >
            <FontAwesomeIcon className="mr-1" icon={icon} /> { open ? children : null}
        </Link>

        { !open && isMouserOver ? (
            <div 
                className="absolute min-w-20 h-7 flex items-center justify-center 
                rounded-md bg-gray-50 shadow left-10 -top-1.5 text-emerald-500
                dark:bg-neutral-800 dark:shadow-black dark:text-white text-sm
                px-2"
            >
                { children }
            </div>
        ) : null}
    </div>
  )
}

export default Navlink