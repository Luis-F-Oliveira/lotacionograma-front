import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import image from './img.jpg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const isEmpty = (value) => value == null || value.trim() === ''
    if (isEmpty(email)) {
      toast.warning('Email deve ser preenchido')
    }
    if (isEmpty(password)) {
      toast.warning('Senha deve ser preenchida')
    }

    if (email && password) {
      toast.error('Email ou Senha inválidos!')
      toast.success('Verificado com sucesso!')
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
          <input type="email" id='email' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500 pl-2' onChange={(e) => setEmail(e.target.value)} />
          <label className='text-emerald-500' htmlFor="password">
            <FontAwesomeIcon icon={faLock} /> Password
          </label>
          <input type="password" id='password' className='outline-0 border-b-2 border-emerald-500 text-emerald-500 pl-2' onChange={(e) => setPassword(e.target.value)} />
          <button className='mt-4 bg-emerald-500 hover:bg-emerald-600 duration-300 ease-in h-8 rounded-md text-white'>
            Sing In
          </button>
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