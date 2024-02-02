import { Button } from '@/interface/components'
import React from 'react'

export const Register = (name, id) => {
  return (
    <div>
      <h2 className='w-full mt-2 text-md'>
        Servidor: { name }
      </h2>
      <form className='mt-5 text-sm'>
        <div>
          <input className="mr-2" name="access" id="visitor" type="radio" />
          <label htmlFor="visitor">Visitante</label>
        </div>
        <div>
          <input className="mr-2" name="access" id="user" type="radio" />
          <label htmlFor="visitor">Usuário</label>
        </div>
        <div>
          <input className="mr-2" name="access" id="admin" type="radio" />
          <label htmlFor="visitor">Administrador</label>
        </div>
        <div className='mb-3'>
          <input className="mr-2" name="access" id="moderator" type="radio" />
          <label htmlFor="visitor">Moderador</label>
        </div>
        <Button styled={'solid'}>
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
