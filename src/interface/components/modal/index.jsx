import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({ width, height, children, handleClose, title }) => {
  return (
    <div className='fixed inset-0 backdrop-blur-sm flex justify-center items-center'>
      <div 
        className={`${height} ${width} rounded-md p-2 shadow bg-gray-50
        dark:bg-neutral-800 dark:shadow-black`}
      >
        <div className='relative'>
          <FontAwesomeIcon onClick={handleClose} className='absolute right-0 text-2xl cursor-pointer' icon={faXmark} />
          <h1 className='text-xl'>
            { title }
          </h1>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal