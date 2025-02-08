import type { AccentColor, ColorPalette, GrayColor, Radius } from '@agniflow-ui/panda-preset'
import { createVariables } from '@agniflow-ui/panda-preset/utils'
import { Match } from 'effect'
import { useEffect } from 'react'
import { token } from 'styled-system/tokens'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Font, fonts } from '~/app/fonts'

const loadColorPalette = async (color: string): Promise<ColorPalette> => {
  const palettes: Record<string, () => Promise<{ default: ColorPalette }>> = {
    amber: () => import('@agniflow-ui/panda-preset/colors/amber'),
    blue: () => import('@agniflow-ui/panda-preset/colors/blue'),
    bronze: () => import('@agniflow-ui/panda-preset/colors/bronze'),
    brown: () => import('@agniflow-ui/panda-preset/colors/brown'),
    crimson: () => import('@agniflow-ui/panda-preset/colors/crimson'),
    cyan: () => import('@agniflow-ui/panda-preset/colors/cyan'),
    gold: () => import('@agniflow-ui/panda-preset/colors/gold'),
    grass: () => import('@agniflow-ui/panda-preset/colors/grass'),
    green: () => import('@agniflow-ui/panda-preset/colors/green'),
    indigo: () => import('@agniflow-ui/panda-preset/colors/indigo'),
    iris: () => import('@agniflow-ui/panda-preset/colors/iris'),
    jade: () => import('@agniflow-ui/panda-preset/colors/jade'),
    lime: () => import('@agniflow-ui/panda-preset/colors/lime'),
    mauve: () => import('@agniflow-ui/panda-preset/colors/mauve'),
    mint: () => import('@agniflow-ui/panda-preset/colors/mint'),
    neutral: () => import('@agniflow-ui/panda-preset/colors/neutral'),
    olive: () => import('@agniflow-ui/panda-preset/colors/olive'),
    orange: () => import('@agniflow-ui/panda-preset/colors/orange'),
    pink: () => import('@agniflow-ui/panda-preset/colors/pink'),
    plum: () => import('@agniflow-ui/panda-preset/colors/plum'),
    purple: () => import('@agniflow-ui/panda-preset/colors/purple'),
    red: () => import('@agniflow-ui/panda-preset/colors/red'),
    ruby: () => import('@agniflow-ui/panda-preset/colors/ruby'),
    sage: () => import('@agniflow-ui/panda-preset/colors/sage'),
    sand: () => import('@agniflow-ui/panda-preset/colors/sand'),
    sky: () => import('@agniflow-ui/panda-preset/colors/sky'),
    slate: () => import('@agniflow-ui/panda-preset/colors/slate'),
    teal: () => import('@agniflow-ui/panda-preset/colors/teal'),
    tomato: () => import('@agniflow-ui/panda-preset/colors/tomato'),
    violet: () => import('@agniflow-ui/panda-preset/colors/violet'),
    yellow: () => import('@agniflow-ui/panda-preset/colors/yellow'),
  }

  const loader = palettes[color]
  if (!loader) {
    throw new Error(`Unknown color palette: ${color}`)
  }

  const module = await loader()
  return module.default
}

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)
  const grayColor = useThemeStore((state) => state.grayColor)
  const font = useThemeStore((state) => state.font)
  const radius = useThemeStore((state) => state.radius)

  const setAccentColor = useThemeStore((state) => state.setAccentColor)
  const setGrayColor = useThemeStore((state) => state.setGrayColor)
  const setFont = useThemeStore((state) => state.setFont)
  const setRadius = useThemeStore((state) => state.setRadius)
  const reset = useThemeStore((state) => state.reset)

  useEffect(() => {
    syncAccentColor(accentColor)
  }, [accentColor])

  useEffect(() => {
    syncGrayColor(grayColor)
  }, [grayColor])

  useEffect(() => {
    syncFontFamily(font)
  }, [font])

  useEffect(() => {
    syncBorderRaius(radius)
  }, [radius])

  const getConfig = () =>
    baseConfig
      .replace('__ACCENT_COLOR__', accentColor)
      .replace('__GRAY_COLOR__', grayColor)
      .replace('__BORDER_RADIUS__', radius)

  return {
    accentColor,
    font,
    grayColor,
    radius,
    getConfig,
    reset,
    setAccentColor,
    setFont,
    setGrayColor,
    setRadius,
  }
}

const syncAccentColor = async (color: AccentColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const styleStyle = document.querySelector<HTMLStyleElement>('#agniflow-ui-accent')
  if (!styleStyle) return

  const colorPalette = await loadColorPalette(color)
  const cssVariables = createVariables(colorPalette)
  styleStyle.textContent = cssVariables
}

const syncGrayColor = async (color: GrayColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const styleStyle = document.querySelector<HTMLStyleElement>('#agniflow-ui-gray')
  if (!styleStyle) return

  const colorPalette = await loadColorPalette(color)
  const cssVariables = createVariables(colorPalette).replaceAll(color, 'gray')
  styleStyle.textContent = cssVariables
}

const syncFontFamily = (font: Font) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  root.style.setProperty('--fonts-body', fonts[font])
}

const syncBorderRaius = (radius: Radius) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const borderRadii = Match.value(radius).pipe(
    Match.when('none', () => ({
      l1: token.var('radii.none'),
      l2: token.var('radii.none'),
      l3: token.var('radii.none'),
    })),
    Match.when('xs', () => ({
      l1: token.var('radii.2xs'),
      l2: token.var('radii.xs'),
      l3: token.var('radii.sm'),
    })),
    Match.when('sm', () => ({
      l1: token.var('radii.xs'),
      l2: token.var('radii.sm'),
      l3: token.var('radii.md'),
    })),
    Match.when('md', () => ({
      l1: token.var('radii.sm'),
      l2: token.var('radii.md'),
      l3: token.var('radii.lg'),
    })),
    Match.when('lg', () => ({
      l1: token.var('radii.md'),
      l2: token.var('radii.lg'),
      l3: token.var('radii.xl'),
    })),
    Match.when('xl', () => ({
      l1: token.var('radii.lg'),
      l2: token.var('radii.xl'),
      l3: token.var('radii.2xl'),
    })),
    Match.when('2xl', () => ({
      l1: token.var('radii.xl'),
      l2: token.var('radii.2xl'),
      l3: token.var('radii.3xl'),
    })),
    Match.exhaustive,
  )

  root.style.setProperty('--radii-l1', borderRadii.l1)
  root.style.setProperty('--radii-l2', borderRadii.l2)
  root.style.setProperty('--radii-l3', borderRadii.l3)
}

interface State {
  accentColor: AccentColor
  font: Font
  grayColor: GrayColor
  radius: Radius
}

const initialState: State = {
  accentColor: 'neutral',
  font: 'Outfit',
  grayColor: 'neutral',
  radius: 'sm',
}

interface Actions {
  reset: () => void
  setAccentColor: (color: AccentColor) => void
  setFont: (font: Font) => void
  setGrayColor: (color: GrayColor) => void
  setRadius: (radius: Radius) => void
}

const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setFont: (font) => set(() => ({ font })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        setRadius: (radius) => set(() => ({ radius })),
        reset: () => set(initialState),
      }),
      {
        name: 'agniflow-ui-store',
        version: 5,
      },
    ),
  ),
)

const baseConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@agniflow-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: '__ACCENT_COLOR__',
      grayColor: '__GRAY_COLOR__',
      borderRadius: '__BORDER_RADIUS__',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react', // or 'solid' or 'vue'
  outdir: 'styled-system',
})
`
