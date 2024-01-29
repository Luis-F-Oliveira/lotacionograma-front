import { useUser } from '@context'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Theme from '@/interface/theme'

const PrivateRoute = ({ children }) => {
  const { user } = useUser()
  const navigate = useNavigate()

  if (!user) {
    return <Navigate to={'/'} replace />
  }

  // useEffect(() => {
  //   if (user.first === 0) {
  //     navigate('/update')
  //   }
  // }, [user])

  return <Theme>{ children }</Theme>
}   

export default PrivateRoute