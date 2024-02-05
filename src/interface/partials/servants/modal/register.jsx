import { Button, toastify } from '@components'
import { useState, useContext } from 'react'
import { useUser, AxiosContext } from '@context'
import Cookies from 'js-cookie'

export const Register = ({ servantsName, servantsId }) => {
  const [ accessValue, setAccessValue ] = useState(null)
  const { api } = useContext(AxiosContext)
  const { user } = useUser()
  const token = Cookies.get('jwt')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!accessValue) {
      toastify('Escolha um nivel de acesso', 'warning', user.theme)
    } else {
        await api.post('auth', {
          'user_id': servantsId,
          'access': accessValue
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          if (response.status == 201) {
            toastify('Usuário cadastrado', 'success', user.theme)
          }
        })
        .catch((error) => {
          if (error.response.status == 406) {
            toastify('Usuário já cadastrado', 'error', user.theme)
          }
        })
    }
  }

  return (
    <div>
      <h2 className='w-full mt-2 text-md'>
        Servidor: { servantsName }
      </h2>
      <form className='mt-5 text-sm' onSubmit={handleSubmit}>
        <div>
          <input onChange={(e) => setAccessValue(1)} className="mr-2" name="access" id="visitor" type="radio" />
          <label htmlFor="visitor">Visitante</label>
        </div>
        <div>
          <input onChange={(e) => setAccessValue(2)} className="mr-2" name="access" id="user" type="radio" />
          <label htmlFor="visitor">Usuário</label>
        </div>
        <div>
          <input onChange={(e) => setAccessValue(3)} className="mr-2" name="access" id="admin" type="radio" />
          <label htmlFor="visitor">Administrador</label>
        </div>
        { user.access == 4 ? (
          <div>
            <input onChange={(e) => setAccessValue(4)} className="mr-2" name="access" id="admin" type="radio" />
            <label htmlFor="visitor">Moderador</label>
          </div>
        ) : null}
        <div className='mt-2'>
          <Button styled={'solid'}>
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  )
}
