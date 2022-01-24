import tw from 'tailwind-styled-components'

export const Container = tw.section`
  flex
  flex-col
  justify-between
  min-h-screen
  bg-gray-800
  text-white
`

export const Main = tw.div`
  flex
  flex-1
`

export const Wrapper = tw.div`
  flex-1
`

export const Content = tw.main`
  p-8
  flex-1
  h-full
`
