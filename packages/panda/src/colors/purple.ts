import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fefcfe' },
    '2': { value: '#fbf7fe' },
    '3': { value: '#f7edfe' },
    '4': { value: '#f2e2fc' },
    '5': { value: '#ead5f9' },
    '6': { value: '#e0c4f4' },
    '7': { value: '#d1afec' },
    '8': { value: '#be93e4' },
    '9': { value: '#8e4ec6' },
    '10': { value: '#8347b9' },
    '11': { value: '#8145b5' },
    '12': { value: '#402060' },
    a1: { value: '#aa00aa03' },
    a2: { value: '#8000e008' },
    a3: { value: '#8e00f112' },
    a4: { value: '#8d00e51d' },
    a5: { value: '#8000db2a' },
    a6: { value: '#7a01d03b' },
    a7: { value: '#6d00c350' },
    a8: { value: '#6600c06c' },
    a9: { value: '#5c00adb1' },
    a10: { value: '#53009eb8' },
    a11: { value: '#52009aba' },
    a12: { value: '#250049df' },
  },
  dark: {
    '1': { value: '#18111b' },
    '2': { value: '#1e1523' },
    '3': { value: '#301c3b' },
    '4': { value: '#3d224e' },
    '5': { value: '#48295c' },
    '6': { value: '#54346b' },
    '7': { value: '#664282' },
    '8': { value: '#8457aa' },
    '9': { value: '#8e4ec6' },
    '10': { value: '#9a5cd0' },
    '11': { value: '#d19dff' },
    '12': { value: '#ecd9fa' },
    a1: { value: '#b412f90b' },
    a2: { value: '#b744f714' },
    a3: { value: '#c150ff2d' },
    a4: { value: '#bb53fd42' },
    a5: { value: '#be5cfd51' },
    a6: { value: '#c16dfd61' },
    a7: { value: '#c378fd7a' },
    a8: { value: '#c47effa4' },
    a9: { value: '#b661ffc2' },
    a10: { value: '#bc6fffcd' },
    a11: { value: '#d19dff' },
    a12: { value: '#f1ddfffa' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.purple.light.1}', _dark: '{colors.purple.dark.1}' } },
  '2': { value: { _light: '{colors.purple.light.2}', _dark: '{colors.purple.dark.2}' } },
  '3': { value: { _light: '{colors.purple.light.3}', _dark: '{colors.purple.dark.3}' } },
  '4': { value: { _light: '{colors.purple.light.4}', _dark: '{colors.purple.dark.4}' } },
  '5': { value: { _light: '{colors.purple.light.5}', _dark: '{colors.purple.dark.5}' } },
  '6': { value: { _light: '{colors.purple.light.6}', _dark: '{colors.purple.dark.6}' } },
  '7': { value: { _light: '{colors.purple.light.7}', _dark: '{colors.purple.dark.7}' } },
  '8': { value: { _light: '{colors.purple.light.8}', _dark: '{colors.purple.dark.8}' } },
  '9': { value: { _light: '{colors.purple.light.9}', _dark: '{colors.purple.dark.9}' } },
  '10': { value: { _light: '{colors.purple.light.10}', _dark: '{colors.purple.dark.10}' } },
  '11': { value: { _light: '{colors.purple.light.11}', _dark: '{colors.purple.dark.11}' } },
  '12': { value: { _light: '{colors.purple.light.12}', _dark: '{colors.purple.dark.12}' } },
  a1: { value: { _light: '{colors.purple.light.a1}', _dark: '{colors.purple.dark.a1}' } },
  a2: { value: { _light: '{colors.purple.light.a2}', _dark: '{colors.purple.dark.a2}' } },
  a3: { value: { _light: '{colors.purple.light.a3}', _dark: '{colors.purple.dark.a3}' } },
  a4: { value: { _light: '{colors.purple.light.a4}', _dark: '{colors.purple.dark.a4}' } },
  a5: { value: { _light: '{colors.purple.light.a5}', _dark: '{colors.purple.dark.a5}' } },
  a6: { value: { _light: '{colors.purple.light.a6}', _dark: '{colors.purple.dark.a6}' } },
  a7: { value: { _light: '{colors.purple.light.a7}', _dark: '{colors.purple.dark.a7}' } },
  a8: { value: { _light: '{colors.purple.light.a8}', _dark: '{colors.purple.dark.a8}' } },
  a9: { value: { _light: '{colors.purple.light.a9}', _dark: '{colors.purple.dark.a9}' } },
  a10: { value: { _light: '{colors.purple.light.a10}', _dark: '{colors.purple.dark.a10}' } },
  a11: { value: { _light: '{colors.purple.light.a11}', _dark: '{colors.purple.dark.a11}' } },
  a12: { value: { _light: '{colors.purple.light.a12}', _dark: '{colors.purple.dark.a12}' } },
  default: { value: { _light: '{colors.purple.light.9}', _dark: '{colors.purple.dark.9}' } },
  emphasized: { value: { _light: '{colors.purple.light.10}', _dark: '{colors.purple.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.purple.light.a11}', _dark: '{colors.purple.dark.a11}' } },
})

export default {
  name: 'purple',
  tokens,
  semanticTokens,
}
