import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Import = () => {
  return (
    <button 
      className='hover:text-emerald-700 active:text-emerald-600
      transition-colors dark:hover:text-neutral-400 dark:active:text-neutral-200'
    >
      <FontAwesomeIcon icon={faUpload} />
    </button>
  )
}
