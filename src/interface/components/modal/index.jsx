import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useModal } from '@context'

const Modal = () => {
  const { infos, content, handleOpen } = useModal()
  return (
    <div className='fixed z-50 inset-0 backdrop-blur-sm flex justify-center items-center'>
      <div 
        className={`${infos.width} ${infos.height} rounded-md p-2 shadow bg-gray-50
        dark:bg-neutral-800 dark:shadow-black text-emerald-500 
        dark:text-white`}
      >
        <div className='relative'>
          <FontAwesomeIcon onClick={handleOpen} className='absolute right-0 text-2xl cursor-pointer' icon={faXmark} />
          <h1 className='text-xl'>
            { infos.title }
          </h1>
          { content }
        </div>
      </div>
    </div>
  )
}

export default Modal