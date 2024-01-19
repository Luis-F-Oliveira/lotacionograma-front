import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Navlink from "./navlink"
import ButtonTheme from "./theme"
import Icon from './icon.png'

const Sidebar = () => {
  const [ open, setOpen ] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <aside 
      className={`h-screen ${ open ? "w-60" : "w-18" } z-20 bg-gray-50 dark:bg-neutral-800 dark:border-neutral-900 dark:shadow dark:shadow-black border-r shadow-sm transition-all fixed`}  
    >
      <nav className="h-full flex flex-col">
        <div className="h-16 flex justify-center items-center dark:border-neutral-900 border-b shadow-sm">
        <img className="w-6 mr-2" src={Icon} alt="Icone" />
          { 
            open ? (
              <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-emerald-500 inline-block text-transparent bg-clip-text font-bold text-xl">
                Lotacionograma
              </h1>   
            ) : null
          }
          <button 
            onClick={toggleOpen}
            className="absolute flex justify-center items-center -right-3
            bg-gray-50 p-2 rounded-md text-emerald-500 shadow
            hover:bg-gray-100 transition-colors duration-300 active:bg-gray-200
            dark:bg-neutral-800 dark:text-white dark:shadow dark:shadow-black"
          >
            <FontAwesomeIcon className={`${open ? "rotate-180" : "rotate-0"}`} icon={faChevronRight} />
          </button>
        </div>
        <div className="h-full px-4 pt-5">
          <ul>
            <Navlink to={'/principal'} open={open} icon={faHouse}>
              Principal
            </Navlink>
          </ul>
        </div>
        <div className="flex justify-center dark:border-neutral-900 border-t shadow-sm py-2">
          <ButtonTheme />
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar