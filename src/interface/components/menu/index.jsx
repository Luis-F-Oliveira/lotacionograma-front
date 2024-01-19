import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useTimer } from "react-timer-hook"
import Timer from "./timer"

const Menu = () => {
  const [ mouseMoving, setMouseMoving ] = useState(false)
  const { restart } = useTimer()

  const Restart = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 3600)
    restart(time)
  }

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoving(true)
      Restart()
    }

    const handleMouseStop = () => {
      setMouseMoving(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseMove)
    document.addEventListener('mouseup', handleMouseStop)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseStop)
    };
  }, [])

  return (
    <div className='fixed top-1 right-1 flex items-center'>
      <Timer expiryTimestamp={time} />
      <button 
        className="ml-2 p-2 rounded-full shadow bg-gray-50
        text-emerald-500 hover:text-white hover:bg-emerald-500 transition-colors 
        active:bg-emerald-300 duration-500 dark:bg-neutral-800 dark:shadow-black
        dark:text-white dark:hover:bg-neutral-900 dark:active:bg-neutral-700
        flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
    </div>
  )
}

export default Menu