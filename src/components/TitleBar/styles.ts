import tw from 'tailwind-styled-components'

export const Container = tw.header`
  flex
  items-center
  justify-between

  bg-gray-800
  border-b-2
  border-gray-600
  text-sm
  p-1
`

export const Logo = tw.div`
  text-blue-700
`

export const Items = tw.ul`
  hidden
  flex-1
  ml-2

  lg:flex
`

export const Item = tw.p`
  mx-2
  cursor-pointer
`

export const Title = tw.h2`
  text-center
  justify-center
  flex-1
`

export const ButtonContainer = tw.div`
  flex
  lg:flex-1
  justify-end
`
type ButtonProps = {
  minimize?: boolean
  maximize?: boolean
  close?: boolean
}

export const Button = tw.button<ButtonProps>`
  p-1.5
  mx-1.5
  rounded-full
  lg:p-2

  ${p => (p.minimize ? 'bg-yellow-500' : 'bg-black')}
  ${p => (p.maximize ? 'bg-green-500' : 'bg-black')}
  ${p => (p.close ? 'bg-red-500' : 'bg-black')}
`
