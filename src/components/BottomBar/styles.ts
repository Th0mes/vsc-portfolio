import tw from 'tailwind-styled-components'

export const Container = tw.footer`
  flex
  items-center
  justify-between

  bg-gray-800
  border-t-2
  border-gray-600
  text-xs
  px-1

  md:text-sm
`

export const Wrapper = tw.ul`
  flex
`

export const Item = tw.li<{ bg?: boolean }>`
  ${p => (p.bg ? 'bg-gray-400' : 'bg-gray-800')}
  flex
  items-center
  mx-1
  p-1
  cursor-pointer

  hover:bg-gray-600
`

export const Text = tw.span`
  ml-2
`
