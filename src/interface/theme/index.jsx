import { useUser } from '@context'
import { useState, useEffect } from 'react'

const Theme = ({ children }) => {
  const { user } = useUser()
  const [ theme ] = useState(user.theme)

  return (
    <div className={`${ theme ? 'dark' : 'light' } transition-colors`}>
        { children }
    </div>
  )
}

export default Theme