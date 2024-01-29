import { Body, Sidebar, Menu, Container } from '@components'
import { useUser } from '@context'

const Import = () => {
  const { user } = useUser()
  return (
    <Body>
      <Sidebar />
      <Menu />
      <Container>
        
      </Container>
    </Body>
  )
}

export default Import