'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'styled-system/css'

interface Props {
  framework: string
}

const link = cva({
  base: {
    borderBottomWidth: '1px',
    color: 'fg.muted',
    fontWeight: 'medium',
    p: '3',
    transitionDuration: 'normal',
    transitionProperty: 'color',
    transitionTimingFunction: 'default',
    _hover: { color: 'fg.default' },
    _currentPage: {
      color: 'colorPalette.default',
      _hover: {
        color: 'colorPalette.default',
      },
    },
  },
})()

export const MobileNavbarLinks = (props: Props) => {
  const { framework } = props
  const pathname = usePathname()

  return (
    <>
      <NextLink
        href={`/react/docs/overview/introduction`}
        className={link}
        aria-current={pathname.startsWith(`/react/docs`) ? 'page' : undefined}
      >
        Docs
      </NextLink>
    </>
  )
}
