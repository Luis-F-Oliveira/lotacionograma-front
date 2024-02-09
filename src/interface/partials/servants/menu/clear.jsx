import { faBroom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTable } from '@/data/contexts'

export const Clear = () => {
  const { getApi } = useTable()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await getApi('servants')
  }

  return (
    <form onSubmit={handleSubmit}>
        <button
            type='submit'
            className='bg-gray-50 flex items-center justify-center
            w-10 h-10 mb-1 rounded shadow hover:bg-emerald-500
            hover:text-white active:bg-emerald-400 transition-colors
            dark:bg-neutral-800 dark:shadow-black dark:hover:bg-neutral-900
            dark:active:bg-neutral-700'
        >
            <FontAwesomeIcon icon={faBroom} />
        </button>
    </form>
  )
}
