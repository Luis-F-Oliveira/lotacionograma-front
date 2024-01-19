import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTimer } from "react-timer-hook"
import { toast } from 'react-toastify'
import { useUser } from '@context'

const Timer = ({ expiryTimestamp }) => {
  const { logoutUser } = useUser()
  const { seconds, minutes } = useTimer({ 
    autoStart: true,
    expiryTimestamp,
    onExpire: () => {
        toast('Espero te ver novamente! 😃')
        logoutUser()
    }
  })

  return (
    <div className="text-emerald-500 dark:text-white">
      <FontAwesomeIcon icon={faClock} /> <span>{minutes}:{seconds}</span>
    </div>
  )
}

export default Timer