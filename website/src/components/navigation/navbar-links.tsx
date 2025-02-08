'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'

interface Props {
  framework: string
}

const link = cva({
  base: {
    color: 'fg.muted',
    fontWeight: 'medium',
    textStyle: 'sm',
    transitionDuration: 'normal',
    transitionProperty: 'color',
    transitionTimingFunction: 'default',
    _hover: { color: 'colorPalette.text' },
    _currentPage: {
      color: 'colorPalette.text',
      _hover: {
        color: 'colorPalette.text',
      },
    },
  },
})()

export const NavbarLinks = (props: Props) => {
  const { framework } = props
  const pathname = usePathname()

  return (
    <HStack gap="6" me="2">
      <NextLink
        href={`/react/docs/overview/introduction`}
        className={link}
        aria-current={pathname.startsWith(`/react/docs`) ? 'page' : undefined}
      >
        Docs
      </NextLink>
    </HStack>
  )
}
