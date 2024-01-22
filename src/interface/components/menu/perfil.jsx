import { useMenu, useUser } from '@context'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'react'

const Perfil = () => {
  const { activeOption } = useMenu()
  const { user } = useUser()
  const perfilDivRef = useRef(null)

  useEffect(() => {
    const perfilDiv = perfilDivRef.current
    if (activeOption == 1) {
      perfilDiv.style.opacity = '1'
    } else {
      const time = setTimeout(() => {
        perfilDiv.style.opacity = '0'
      }, 30)
      return () => clearTimeout(time)
    }
  })

  return (
    <div 
      ref={perfilDivRef}
      className={`${ activeOption == 1 ? 'h-72' : 'h-0' } 
        w-60 mr-2 mt-1 rounded-md opacity-0 delay-75 
        shadow dark:shadow-black dark:bg-neutral-800 
        transition-all bg-gray-50 text-emerald-500 
        dark:text-white px-3 pt-2`}
    >
      {
        activeOption == 1 ? (
          <p className='text'>
            {user.username}
          </p>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Perfil