import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { useSidebar } from '@context'
import { Link } from 'react-router-dom'
import Navlink from './navlink'
import Dropdown from './dropdown'
import logo from './icon.png'

const Sidebar = () => {
  const { open, handleOpen } = useSidebar()

  return (
    <aside className={`${ open ? 'w-60' : 'w-18'} h-screen transition-all z-30 bg-gray-50 dark:bg-neutral-800 dark:shadow-md dark:shadow-black shadow relative`}>
      <header className={`w-full p-3 flex ${ open ? 'justify-start' : 'justify-center' } items-center shadow dark:shadow-neutral-900`}>
        <img className='w-6' src={logo} alt="logo" />
        { open ? (
          <h1 className='ml-2 bg-gradient-to-r from-blue-600 via-green-500 to-emerald-500 inline-block text-transparent bg-clip-text font-bold text-md'>
            Lotacionograma
          </h1>
        ) : null }
      </header>
      <button
        onClick={handleOpen}
        className='absolute justify-center items-center shadow 
        w-8 py-1 bg-gray-50 rounded-md -right-3.5 -mt-3.5
        text-sm text-emerald-500 hover:bg-gray-100 active:bg-white
        transition-colors duration-200 dark:bg-neutral-800
        dark:shadow-black dark:text-white dark:hover:bg-neutral-900
        dark:active:bg-neutral-800'
      >
        <FontAwesomeIcon className={`${ open ? 'rotate-180' : 'rotate-0' }`} icon={faChevronRight} />
      </button>
      <nav className='mx-4 mt-3 pt-2'>
        <ul className='mt-2'>
          <li>
            <Navlink to={'/home'} icon={faHome}>
              Principal
            </Navlink>
          </li>
          <li>
            <Dropdown name={'Lotacionograma'} icon={faChartPie} id={1}>
              <Link to={'/servants'}>Servidores</Link>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar