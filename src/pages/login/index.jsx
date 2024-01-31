import { useEffect, useState, useContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { AxiosContext, useUser } from '@context'
import { Button } from '@components'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import image from './img.jpg'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { api } = useContext(AxiosContext)
  const { user, loginUser } = useUser()
  const navigate = useNavigate()
  const particlesRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isEmpty = (value) => value == null || value.trim() === ''

    if (isEmpty(email)) {
      toast.warning('Email deve ser preenchido')
    }

    if (isEmpty(password)) {
      toast.warning('Senha deve ser preenchida')
    }

    if (email && password) {
      api.post('login', {
        email, password
      })
      .then((response) => {
        const { token, user } = response.data
        Cookies.set('jwt', token, { expires: 1 })
        loginUser({
          id: user.id,
          userId: user.user_id,
          theme: user.theme,
          first: user.first,
          access: user.access
        })

        navigate('home')
      })
      .catch((error) => {
        if (error.response.status === 404) {
          toast.error('Usuário não econtrado')
        }
        if (error.response.status === 401) {
          toast.error('Senha incorreta')
        }
      })
    }
  }

  useEffect(() => {
    if (particlesRef.current) {
      particlesJS('particles-js', {
      })
    }
  }, [])

  return (
    <div ref={particlesRef} id='particles-js' className='w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden'>
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
        </form>
        <div className='w-1/2'>
          <img className='rounded-r-lg w-full h-full' src={image} alt="login-img" />
        </div>
      </div>
    </div>
  )
}

export default Login