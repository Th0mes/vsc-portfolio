import Link from 'src/components/Link'
import tw from 'tailwind-styled-components'

export const Container = tw.div`
  hidden
  flex-col
  border-r-2
  border-gray-600
  text-sm
  
  sm:flex
  sm:w-48
  md:text-base
  md:w-56
  lg:w-64
  xl:w-72
`

export const Title = tw.div`
  uppercase
  ml-2
`

export const Nav = tw.div`
  flex
  items-center
  uppercase
  my-2
  ml-2
  cursor-pointer
  
`

export const ExplorerLabel = tw.div`
  py-1
  ml-2
  items-center
`

export const DropdownLink = tw(Link)`
  flex
  items-center
  px-4

  hover:bg-gray-600
`
