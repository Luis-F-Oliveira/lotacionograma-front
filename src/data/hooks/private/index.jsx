import { useUser } from '@context'
import { Navigate } from 'react-router-dom'
import Theme from '@/interface/theme'

const PrivateRoute = ({ children }) => {
  const { user } = useUser()

  if (!user) {
    return <Navigate to={'/'} replace />
  }

  return <Theme>{ children }</Theme>
}   

export default PrivateRoute