import {
  VscAccount,
  VscCode,
  VscEdit,
  VscFiles,
  VscGithubAlt,
  VscMail,
  VscSettingsGear
} from 'react-icons/vsc'
import { Container, Wrapper, Icon } from './styles'

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Icon active>
          <VscFiles />
        </Icon>
        <Icon>
          <VscGithubAlt />
        </Icon>
        <Icon>
          <VscCode />
        </Icon>
        <Icon>
          <VscEdit />
        </Icon>
        <Icon>
          <VscMail />
        </Icon>
      </Wrapper>
      <Wrapper>
        <Icon>
          <VscAccount />
        </Icon>
        <Icon>
          <VscSettingsGear />
        </Icon>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
