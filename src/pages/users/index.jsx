import { Body } from '@components'
import { TableProvider } from '@context'
import { Table } from '@/interface/partials/servants'

const Users = () => {
  return (
    <Body>
      <h1 className='text-2xl'>
        Servidores
      </h1>

      <TableProvider>
        <Table />
      </TableProvider>
    </Body>
  )
}

export default Users