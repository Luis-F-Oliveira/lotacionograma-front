import { DashProvider } from './context/DashContext'
import { ToastContainer, toast } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login'
import Recovery from './pages/Recovery';

const App = () => {
  return (
    <>
      <DashProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/recovery' element={<Recovery />} />
          </Routes>
        </BrowserRouter>
      </DashProvider>
      <ToastContainer />
    </>
  )
}

export default App
