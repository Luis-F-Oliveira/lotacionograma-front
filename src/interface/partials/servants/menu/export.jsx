import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export const Export = () => {
  return (
    <button 
      className='hover:text-emerald-700 active:text-emerald-600
      transition-colors dark:hover:text-neutral-400 dark:active:text-neutral-200'
    >
      <FontAwesomeIcon icon={faDownload} />
    </button>
  )
}
