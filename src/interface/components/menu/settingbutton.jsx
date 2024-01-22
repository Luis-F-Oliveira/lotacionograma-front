import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from '@context'

const Settingbutton = () => {
  const { handleToggleSettings } = useMenu()
  return (
    <button
        onClick={handleToggleSettings}
        className="ml-2 p-2 rounded-full shadow bg-gray-50
        text-emerald-500 hover:text-white hover:bg-emerald-500 transition-colors 
        active:bg-emerald-300 duration-500 dark:bg-neutral-800 dark:shadow-black
        dark:text-white dark:hover:bg-neutral-900 dark:active:bg-neutral-700
        flex justify-center items-center"
    >
        <FontAwesomeIcon icon={faGear} />
    </button>
  )
}

export default Settingbutton