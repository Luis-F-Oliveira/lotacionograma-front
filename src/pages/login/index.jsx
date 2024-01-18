import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@components'
import { authService } from '@services'
import image from './img.jpg'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    particlesJS('particles-js', {
    })
  }, [])

  return (
    <div id='particles-js' className='w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden'>
      <div className='w-2/4 h-2/4 bg-white fixed flex rounded-lg'>
        <form className='w-1/2 px-16 flex flex-col justify-center' onSubmit={handleSubmit}>
          <h1 className='text-emerald-500 text-2xl font-bold mb-1'>Login</h1>
          <label className='text-emerald-500' htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </label>
          <input type="email" id='email' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500' onChange={(e) => setEmail(e.target.value)} />
          <label className='text-emerald-500' htmlFor="password">
            <FontAwesomeIcon icon={faLock} /> Password
          </label>
          <input type="password" id='password' className='mb-4 outline-0 border-b-2 border-emerald-500 text-emerald-500' onChange={(e) => setPassword(e.target.value)} />
          <Button styled={'solid'} type={'submit'}>
            Sing In
          </Button>
          <Link to={"/recovery"} className='text-emerald-500'>Esqueci minha senha</Link>
        </form>
        <div className='w-1/2'>
          <img className='rounded-r-lg w-full h-full' src={image} alt="login-img" />
        </div>
      </div>
    </div>
  )
}

export default Login