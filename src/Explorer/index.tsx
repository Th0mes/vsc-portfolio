import { useState } from 'react'
import { VscChevronDown } from 'react-icons/vsc'
import { Container } from './styles'

const Explorer = () => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)

  return (
    <Container>
      <Title>Explorer</Title>
      <Project onCLick={showSubnav}>
        <VscChevronDown /> vsc-portfolio
      </Project>
    </Container>
  )
}

export default Explorer
