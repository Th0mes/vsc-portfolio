import { SiVisualstudiocode } from 'react-icons/si'
import { useWindowSize } from 'src/hooks/useWindowSize'
import {
  Container,
  Logo,
  Items,
  Item,
  Title,
  ButtonContainer,
  Button
} from './styles'

const TitleBar = () => {
  const title = 'Thiago Gomes'
  const { width } = useWindowSize() // {size.width}px / {size.height}px
  return (
    <Container>
      <Logo>
        <SiVisualstudiocode />
      </Logo>
      <Items>
        <Item>File</Item>
        <Item>Edit</Item>
        <Item>View</Item>
        <Item>Go</Item>
        <Item>Run</Item>
        <Item>Terminal</Item>
        <Item>Help</Item>
        <Item></Item>
      </Items>
      <Title>{width <= 360 ? title : `${title} - Visual Studio Code`}</Title>
      <ButtonContainer>
        <Button minimize />
        <Button maximize />
        <Button close />
      </ButtonContainer>
    </Container>
  )
}

export default TitleBar
