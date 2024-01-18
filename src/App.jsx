import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Login } from '@/pages'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App