import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fefdfc' },
    '2': { value: '#fcf9f6' },
    '3': { value: '#f6eee7' },
    '4': { value: '#f0e4d9' },
    '5': { value: '#ebdaca' },
    '6': { value: '#e4cdb7' },
    '7': { value: '#dcbc9f' },
    '8': { value: '#cea37e' },
    '9': { value: '#ad7f58' },
    '10': { value: '#a07553' },
    '11': { value: '#815e46' },
    '12': { value: '#3e332e' },
    a1: { value: '#aa550003' },
    a2: { value: '#aa550009' },
    a3: { value: '#a04b0018' },
    a4: { value: '#9b4a0026' },
    a5: { value: '#9f4d0035' },
    a6: { value: '#a04e0048' },
    a7: { value: '#a34e0060' },
    a8: { value: '#9f4a0081' },
    a9: { value: '#823c00a7' },
    a10: { value: '#723300ac' },
    a11: { value: '#522100b9' },
    a12: { value: '#140600d1' },
  },
  dark: {
    '1': { value: '#12110f' },
    '2': { value: '#1c1816' },
    '3': { value: '#28211d' },
    '4': { value: '#322922' },
    '5': { value: '#3e3128' },
    '6': { value: '#4d3c2f' },
    '7': { value: '#614a39' },
    '8': { value: '#7c5f46' },
    '9': { value: '#ad7f58' },
    '10': { value: '#b88c67' },
    '11': { value: '#dbb594' },
    '12': { value: '#f2e1ca' },
    a1: { value: '#91110002' },
    a2: { value: '#fba67c0c' },
    a3: { value: '#fcb58c19' },
    a4: { value: '#fbbb8a24' },
    a5: { value: '#fcb88931' },
    a6: { value: '#fdba8741' },
    a7: { value: '#ffbb8856' },
    a8: { value: '#ffbe8773' },
    a9: { value: '#feb87da8' },
    a10: { value: '#ffc18cb3' },
    a11: { value: '#fed1aad9' },
    a12: { value: '#feecd4f2' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.brown.light.1}', _dark: '{colors.brown.dark.1}' } },
  '2': { value: { _light: '{colors.brown.light.2}', _dark: '{colors.brown.dark.2}' } },
  '3': { value: { _light: '{colors.brown.light.3}', _dark: '{colors.brown.dark.3}' } },
  '4': { value: { _light: '{colors.brown.light.4}', _dark: '{colors.brown.dark.4}' } },
  '5': { value: { _light: '{colors.brown.light.5}', _dark: '{colors.brown.dark.5}' } },
  '6': { value: { _light: '{colors.brown.light.6}', _dark: '{colors.brown.dark.6}' } },
  '7': { value: { _light: '{colors.brown.light.7}', _dark: '{colors.brown.dark.7}' } },
  '8': { value: { _light: '{colors.brown.light.8}', _dark: '{colors.brown.dark.8}' } },
  '9': { value: { _light: '{colors.brown.light.9}', _dark: '{colors.brown.dark.9}' } },
  '10': { value: { _light: '{colors.brown.light.10}', _dark: '{colors.brown.dark.10}' } },
  '11': { value: { _light: '{colors.brown.light.11}', _dark: '{colors.brown.dark.11}' } },
  '12': { value: { _light: '{colors.brown.light.12}', _dark: '{colors.brown.dark.12}' } },
  a1: { value: { _light: '{colors.brown.light.a1}', _dark: '{colors.brown.dark.a1}' } },
  a2: { value: { _light: '{colors.brown.light.a2}', _dark: '{colors.brown.dark.a2}' } },
  a3: { value: { _light: '{colors.brown.light.a3}', _dark: '{colors.brown.dark.a3}' } },
  a4: { value: { _light: '{colors.brown.light.a4}', _dark: '{colors.brown.dark.a4}' } },
  a5: { value: { _light: '{colors.brown.light.a5}', _dark: '{colors.brown.dark.a5}' } },
  a6: { value: { _light: '{colors.brown.light.a6}', _dark: '{colors.brown.dark.a6}' } },
  a7: { value: { _light: '{colors.brown.light.a7}', _dark: '{colors.brown.dark.a7}' } },
  a8: { value: { _light: '{colors.brown.light.a8}', _dark: '{colors.brown.dark.a8}' } },
  a9: { value: { _light: '{colors.brown.light.a9}', _dark: '{colors.brown.dark.a9}' } },
  a10: { value: { _light: '{colors.brown.light.a10}', _dark: '{colors.brown.dark.a10}' } },
  a11: { value: { _light: '{colors.brown.light.a11}', _dark: '{colors.brown.dark.a11}' } },
  a12: { value: { _light: '{colors.brown.light.a12}', _dark: '{colors.brown.dark.a12}' } },
  default: { value: { _light: '{colors.brown.light.9}', _dark: '{colors.brown.dark.9}' } },
  emphasized: { value: { _light: '{colors.brown.light.10}', _dark: '{colors.brown.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.brown.light.a11}', _dark: '{colors.brown.dark.a11}' } },
})

export default {
  name: 'brown',
  tokens,
  semanticTokens,
}
