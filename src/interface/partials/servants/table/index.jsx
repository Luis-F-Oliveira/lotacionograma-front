import { faAddressCard, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTable, useModal, useUser } from '@context'
import { useEffect, Fragment } from 'react'
import { Register } from '../modal/register'

export const Table = () => {
  const { data, getApi } = useTable()
  const { handleModal } = useModal()
  const { user } = useUser()

  useEffect(() => {
    getApi('servants')
  }, [])

  return (
    <div>
      { data.length === 0 ? (
        <div className='w-full flex justify-center mt-20'>
          <svg className="w-12 h-12 animate-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#CBD5E0" strokeWidth="8"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#4FD1C5" strokeWidth="12" strokeDasharray="25 100"/>
          </svg>
        </div>
      ) : (
        <div className='w-full overflow-x-auto'>
          <table className='table-auto mt-5 border-collapse'>
            <thead className='bg-neutral-100 dark:bg-neutral-700 border-b-2 border-gray-300 dark:border-neutral-800 h-12 font-bold'>
              <tr>
                <th className='text-center px-2'>#</th>
                <th className='text-start min-w-28 px-2'>Matricula</th>
                <th className='text-start min-w-28 px-2'>Nome</th>
                <th className='text-start min-w-28 px-2'>Nascimento</th>
                <th className='text-start min-w-28 px-2'>Email</th>
                <th className='text-start min-w-28 px-2'>Genero</th>
                <th className='text-start min-w-28 px-2'>Raça</th>
                <th className='text-start min-w-28 px-2'>Telefone</th>
                <th className='text-start min-w-28 px-2'>Area - Meio</th>
                <th className='text-start min-w-28 px-2'>Area - Fim</th>
                <th className='text-start min-w-28 px-2'>Cargo</th>
                <th className='text-start min-w-28 px-2'>Departamento</th>
                <th className='text-start min-w-28 px-2'>Admissão</th>
                { user.access == 4 ? <th className='text-center min-w-28 px-2'>Cadastrar</th> : null }
                { user.access >= 3 ?<th className='text-center min-w-28 px-2'>Editar</th> : null }
              </tr>
          </thead>
          <tbody>
            { data.map((servants, index) => (
              <tr key={index} className='bg-gray-50 border-b border-gray-300 text-nowrap h-10
              hover:bg-neutral-200 transition-colors dark:bg-neutral-600
              dark:hover:bg-neutral-800 dark:border-neutral-700' 
              >
                <th className='px-2 text-center'>{ index+1 }</th>
                <td className='px-2'>{ servants.user.matriculation }</td>
                <td className='px-2'>{ servants.user.name }</td>
                <td className='px-2'>{ servants.user.birth }</td>
                <td className='px-2'>{ servants.user.email }</td>
                <td className='px-2'>{ servants.user.gender }</td>
                <td className='px-2'>{ servants.user.race }</td>
                <td className='px-2'>{ servants.user.phone }</td>
                { servants.areas.length ? 
                  (servants.areas.map((area, areaIndex) => (
                    <Fragment key={areaIndex}>
                      { area.type === 1 ? <td className='px-2'>{area.name}</td> : <td className='px-2'>Sem área</td> }
                      { area.type === 2 ? <td className='px-2'>{area.name}</td> : <td className='px-2'>Sem área</td> }
                    </Fragment>
                    )
                  )) : (
                  <Fragment>
                    <td className='px-2'>Sem área</td>
                    <td className='px-2'>Sem área</td>
                  </Fragment>
                  ) }
                <td className='px-2'>{ servants.role.name }</td>
                <td className='px-2'>{ servants.department.name }</td>
                <td className='px-2'>{ servants.user.admission }</td>
                { user.access == 4 ? (
                  <td 
                    onClick={() => handleModal('w-2/12', 'min-h-auto', 'Cadastrar', 
                    <Register servantsName={servants.user.name} servantsId={servants.user.id} />)} 
                    className='px-2 text-center text-xl cursor-pointer'
                  >
                    <FontAwesomeIcon icon={faAddressCard} />
                  </td>
                ) : null}
                { user.access >= 3 ? (
                  <td className='px-2 text-center text-xl cursor-pointer'>
                    <FontAwesomeIcon icon={faPencil} />
                  </td>
                ) : null}
              </tr>
            )) }
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
}