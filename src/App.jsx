import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { PrivateRoute } from '@hooks'
import { UserProvider, SidebarProvider } from '@context'
import { 
  Login, Home, Import, Export, Password ,
  Users
} from '@pages'

const App = () => {
  return (
    <UserProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/update' element={
              <PrivateRoute>
                <Password />
              </PrivateRoute>
            } />
            <Route path='/home' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path='/users' element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            } />
            <Route path='/import' element={
              <PrivateRoute>
                <Import />
              </PrivateRoute>
            } />
            <Route path='/export' element={
              <PrivateRoute>
                <Export />
              </PrivateRoute>
            } />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </SidebarProvider>
    </UserProvider>
  )
}

export default App