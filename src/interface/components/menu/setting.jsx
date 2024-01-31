import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faLock, faRightFromBracket, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useUser, useMenu } from '@context'

const Setting = () => {
  const { user, logoutUser } = useUser()
  const { toggleOption, settings } = useMenu()
  const settingsDivRef = useRef(null)

  useEffect(() => {
    const settingsDiv = settingsDivRef.current
    if (settings) {
      settingsDiv.style.opacity = '1'
    } else {
      const time = setTimeout(() => {
        settingsDiv.style.opacity = '0'
      }, 30)
      return () => clearTimeout(time)
    }
  }, [settings])

  return (
    <div
      ref={settingsDivRef}
      className={`w-36 ${
        settings ? (
          'h-36'
        ) : (
          'h-0'
        )
      } relative bg-gray-50 delay-75 opacity-0
      shadow dark:shadow-black dark:bg-neutral-800
      rounded-md right-0.5 mt-1 pl-3 pt-3 transition-all`}
    >
      { settings ? (
        <ul className='text-emerald-500 dark:text-white'>
          <li className='mb-1'>
            <button onClick={() => toggleOption(1)}>
              <FontAwesomeIcon className='mr-0.5' icon={faUser} /> Perfil
            </button>
          </li>
          <li className='mb-1'>
            <button onClick={() => toggleOption(2)}>
              <FontAwesomeIcon className='mr-0.5  ' icon={faHandshake} /> Sac
            </button>
          </li>
          <li className='mb-1'>
            <Link to={'/recovery'}>
              <FontAwesomeIcon className='mr-0.5  ' icon={faLock} /> Senha
            </Link>
          </li>
          <li className='flex pl-2 bottom-2 left-1 absolute'>
            <button onClick={logoutUser}>
                <FontAwesomeIcon icon={faRightFromBracket} /> logout
            </button>
          </li>
        </ul>
        ) : null 
      }     
    </div>
  )
}

export default Setting