import { Body, Sidebar, Menu, Container, Capacity, Office } from '@components'

const Import = () => {
  return (
    <Body>
      <Sidebar />
      <Menu />
      <Container>
        <div className='grid grid-cols-2 gap-3 text-emerald-500 dark:text-white'>
          <Capacity />
          <Office />
        </div>
        
      </Container>
    </Body>
  )
}

export default Import