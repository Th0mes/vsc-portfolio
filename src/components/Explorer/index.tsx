import { FC, ReactNode, useState } from 'react'
import { IconContext } from 'react-icons'
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'
import { ExplorerData } from './ExplorerData'
import { Container, Title, Nav, ExplorerLabel, DropdownLink } from './styles'

type IconProps = {
  children: ReactNode
  color?: string
}

const Icon: FC<IconProps> = ({ children, color }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: color }}>
      {children}
    </IconContext.Provider>
  )
}

const Explorer: FC = () => {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <Title>Explorer</Title>
      <Nav onClick={showSidebar}>
        {sidebar ? <VscChevronDown /> : <VscChevronRight />}
        <ExplorerLabel>vsc-portfolio</ExplorerLabel>
      </Nav>
      {sidebar
        ? ExplorerData.map((item, index) => (
            <>
              <DropdownLink to={item.path} key={index}>
                <Icon color={item.iconColor}>{item.icon}</Icon>
                <ExplorerLabel>{item.title}</ExplorerLabel>
              </DropdownLink>
            </>
          ))
        : ''}
    </Container>
  )
}

export default Explorer
