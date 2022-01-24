import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  items-center
  justify-between

  text-xl
  sm:text-2xl
  md:text-3xl
  text-gray-600
`

export const Wrapper = tw.div``

export const Icon = tw.div<{ active?: boolean }>`
  ${p => (p.active ? 'border-l-2 border-blue-400 text-gray-400' : '')}
  p-4
  cursor-pointer
  
  hover:bg-gray-600
  hover:text-gray-400
  ease-out
`
