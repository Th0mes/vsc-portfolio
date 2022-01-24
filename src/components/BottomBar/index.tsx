import { SiNextdotjs } from 'react-icons/si'
import { BsHexagon } from 'react-icons/bs'
import {
  VscBell,
  VscCheckAll,
  VscError,
  VscFeedback,
  VscGlobe,
  VscJson,
  VscRefresh,
  VscRemote,
  VscSignOut,
  VscSourceControl,
  VscWarning
} from 'react-icons/vsc'

import { Container, Wrapper, Item, Text } from './styles'
import { useWindowSize } from 'src/hooks/useWindowSize'

const BottomBar = () => {
  const { width } = useWindowSize()
  return (
    <Container>
      <Wrapper>
        <Item bg>
          <VscRemote />
          {width >= 640 ? <Text>WSL: Ubuntu-20.04</Text> : ``}
        </Item>
        <Item>
          <VscSourceControl />
          <Text>master</Text>
        </Item>
        {width >= 1280 ? (
          <Item>
            <VscRefresh />
          </Item>
        ) : (
          ``
        )}
        <Item>
          <VscError />
          <Text>0</Text>
          <Text>
            <VscWarning />
          </Text>
          <Text>0</Text>
        </Item>
        {width >= 1280 ? (
          <>
            <Item>
              <VscSignOut />
            </Item>
            <Item>
              <VscGlobe /> <Text>Connected to Discord</Text>
            </Item>
            <Item>
              <BsHexagon />
              <Text>tabnine</Text>
            </Item>
          </>
        ) : (
          ``
        )}
      </Wrapper>
      <Wrapper>
        <Item>
          <SiNextdotjs />
          {width >= 480 ? (
            <Text>Powered By Next.js</Text>
          ) : (
            <Text>Next.js</Text>
          )}
        </Item>
        {width >= 1280 ? (
          <>
            <Item>UTF-8</Item>
            <Item>
              <VscJson />
              <Text>Typescript React</Text>
            </Item>
          </>
        ) : (
          ``
        )}
        <Item>
          <VscCheckAll />
          <Text>Prettier</Text>
        </Item>
        {width >= 1280 ? (
          <Item>
            <VscFeedback />
          </Item>
        ) : (
          ``
        )}
        <Item>
          <VscBell />
        </Item>
      </Wrapper>
    </Container>
  )
}

export default BottomBar
