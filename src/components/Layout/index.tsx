import { ReactNode } from 'react'
import Explorer from 'src/Explorer'
import BottomBar from '../BottomBar'
import Sidebar from '../Sidebar'
import TitleBar from '../TitleBar'
import { Container, Main, Wrapper, Content } from './styles'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <TitleBar />
      <Main>
        <Sidebar />
        <Explorer />
        <Wrapper>
          {/* <TabsBar /> */}
          <Content>{children}</Content>
        </Wrapper>
      </Main>
      <BottomBar />
    </Container>
  )
}

export default Layout
