import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Body, toastify, Button } from '@components'
import { AxiosContext, useUser } from '@context'
import Cookies from 'js-cookie'

const Register = () => {
  const [ matriculation, setMatriculation ] = useState(null)
  const [ name, setName ] = useState(null)
  const [ access, setAccess ] = useState(null)
  const token = Cookies.get('jwt')
  const { api } = useContext(AxiosContext)
  const { user } = useUser()

  const handleMatriculation = async (e) => {
    e.preventDefault()
    
    if (!matriculation) {
      toastify('Por favor, insira a matricula', 'warning', user.theme)
    } else {
      await api.get(`users/${matriculation}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        } 
      })
      .then((response) => {
        setName(response.data.user.name)
      })
      .catch((error) => {
        toastify('Servidor não encontrado!', 'error', user.theme)
      })
    }
  }

  const handleUser = async (e) => {
    e.preventDefault()

    if (!name) {
      toastify('Primeiro seleciono o usuário', 'warning', user.theme)
    }

    console.log(access)
  }

  return (
    <Body>
      <h1 className='text-xl text-emerald-500 dark:text-white mb-4'>
        Registar usuário
      </h1>
      <div className='w-full flex flex-col justify-center items-center'>
        <form className='text-emerald-500 dark:text-white' onSubmit={handleMatriculation}>
          <h2>
            Matricula
          </h2>
          <div className='flex items-center'>
            <input 
              onChange={(e) => setMatriculation(e.target.value)}
              className='bg-transparent outline-0 border-b-2 border-emerald-500 dark:border-white mr-1 text-center' 
              type="text" 
            />
            <button type='submit'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <span className='ml-3 text-md'>
              { name ? name : (
              <svg className="w-6 h-6 animate-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#CBD5E0" strokeWidth="8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#4FD1C5" strokeWidth="12" strokeDasharray="25 100"/>
              </svg>
              ) }
            </span>
          </div>
        </form>
        <form className='mt-10' onChange={handleUser}>
          
        </form>
      </div>
    </Body>
  )
}

export default Register