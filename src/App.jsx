import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { PrivateRoute } from '@hooks'
import { UserProvider } from '@context'
import { Login, Home } from '@pages'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </UserProvider>
  )
}

export default App