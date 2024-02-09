import { Body } from '@components'
import { TableProvider } from '@context'
import { Table, Import, Export, Search, Clear } from '@/interface/partials/servants'

const Servants = () => {
  return (
    <Body>
      <h1 className='text-2xl mb-5'>
        Servidores
      </h1>

      <TableProvider>
        <div className='flex justify-between items-end -mb-2'>
          <div className='flex gap-3 text-md'>
            <Import />
            <Export />
          </div>
          <div className='flex items-center gap-2'>
            <Clear />
            <Search />
          </div>
        </div>
        <Table />
      </TableProvider>
    </Body>
  )
}

export default Servants