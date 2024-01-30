import { useEffect, useRef } from 'react'
import { useMenu } from '@context'

const Register = () => {
  const { activeOption } = useMenu()
  const registerDivRef = useRef(null)

  useEffect(() => {
    const registerDiv = registerDivRef.current
    if (activeOption == 3) {
      registerDiv.style.opacity = '1'
    } else {
      const time = setTimeout(() => {
        registerDiv.style.opacity = '0'
      }, 30)
      return () => clearTimeout(time)
    }
  })

  return (
    <div 
      ref={registerDivRef}
      className={`${ activeOption == 3 ? 'h-72' : 'h-0' } 
        w-60 mr-2 mt-1 rounded-md opacity-0 delay-75 
        shadow dark:shadow-black dark:bg-neutral-800 
        transition-all bg-gray-50 text-emerald-500 
        dark:text-white px-3 pt-2 absolute`}
    >
    </div>
  )
}

export default Register