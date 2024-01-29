import { useRef, useEffect, useState, useContext } from "react"
import { useUser, AxiosContext } from '@context'
import { toast } from 'react-toastify'
import Cookies from "js-cookie"

const Password = () => {
  const [ password, setPassword ] = useState('')
  const [ first, setFirst ] = useState(true)
  const { api } = useContext(AxiosContext)
  const particlesRef = useRef(null)
  const { user, logoutUser } = useUser()
  const token = Cookies.get('jwt')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isEmpty = (value) => value == null || value.trim() === ''

    if (isEmpty(password)) {
      toast.warning('Preencha o campo!')
    }

    if (password) {
      await api.put(`auth/${user.id}`, {
        password, first
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.status == 200) {
            toast.success('Senha alterada!')
        }

        logoutUser()
      })
    }
  }

  useEffect(() => {
    if (particlesRef.current) {
      particlesJS('particles-js', {
      })
    }

    toast('Por favor, troque sua senha')
  }, [])
   
  return (
    <div ref={particlesRef} id='particles-js' className='w-screen h-screen flex justify-center items-center bg-slate-900'>
      <form className='w-1/4 h-1/3 bg-white fixed flex flex-col justify-center text-emerald-500 p-8 rounded-lg' onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input className="w-full h-6 border-b-2 border-emerald-500 outline-0 mb-3" id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button 
          type="submit"
          className="text-emerald-500 border-emerald-500
          border-2 w-full rounded-md transition-colors
          duration-300 hover:bg-emerald-500 hover:text-white
          active:border-emerald-400 active:bg-emerald-400 px-2"
        >
          Atualizar
        </button>
      </form>
    </div>
  )
}

export default Password