import { useSidebar } from '@context'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Dropdown = ({ name, icon, id, children }) => {
  const { open, activeOption, toggleOption } = useSidebar()

  return (
    <div className='relative'>
      <button 
        onClick={() => toggleOption(id)} 
        className={`flex w-full items-center ${ open ? 'justify-between' : 'justify-center'}
        text-emerald-500 hover:text-emerald-800 transition-colors
        dark:text-white dark:hover:text-white text-sm`}
      >
        <div>
          <FontAwesomeIcon icon={icon} /> { open ? name : null }
        </div>
        { open && (
          activeOption === id ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )
        )}
      </button>
      { open && activeOption == id ? (
        <div 
          className='flex flex-col pl-2 ml-2 border-l-2 border-emerald-500
          text-emerald-500 dark:text-white dark:border-white text-sm'>
          { children }
        </div>
      ) : null}
      { !open && activeOption == id ? (
        <div
          className='flex flex-col min-w-20 rounded bg-gray-50
          shadow absolute left-10 -top-1 p-2 text-emerald-500
          dark:bg-neutral-800 dark:shadow-black dark:text-white'
        >
          <h1 className='border-b border-emerald-500 dark:border-white mb-2'>
            { name }
          </h1>
          { children }
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown