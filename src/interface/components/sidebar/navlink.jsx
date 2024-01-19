import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navlink = ({ open, to, icon, children }) => {
  const [ visible, setVisible ] = useState(false)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, 100)

      return () => clearTimeout(timer)
    } else {
      setVisible(false)
    }
  }, [open])

  return (
    <Link to={to}>
        <li 
          className="hover:bg-emerald-500 hover:text-white text-emerald-500 
          dark:text-white dark:hover:bg-neutral-700 transition-colors duration-500 
          rounded-lg p-2 my-3"
        >
            <FontAwesomeIcon className="mr-3" icon={icon} />
            { visible  ? (
                <span>
                  { children }
                </span>
              ) : null
            }
        </li>
    </Link>
  )
}

export default Navlink