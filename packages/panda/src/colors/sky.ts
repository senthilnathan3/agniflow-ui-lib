import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#f9feff' },
    '2': { value: '#f1fafd' },
    '3': { value: '#e1f6fd' },
    '4': { value: '#d1f0fa' },
    '5': { value: '#bee7f5' },
    '6': { value: '#a9daed' },
    '7': { value: '#8dcae3' },
    '8': { value: '#60b3d7' },
    '9': { value: '#7ce2fe' },
    '10': { value: '#74daf8' },
    '11': { value: '#00749e' },
    '12': { value: '#1d3e56' },
    a1: { value: '#00d5ff06' },
    a2: { value: '#00a4db0e' },
    a3: { value: '#00b3ee1e' },
    a4: { value: '#00ace42e' },
    a5: { value: '#00a1d841' },
    a6: { value: '#0092ca56' },
    a7: { value: '#0089c172' },
    a8: { value: '#0085bf9f' },
    a9: { value: '#00c7fe83' },
    a10: { value: '#00bcf38b' },
    a11: { value: '#00749e' },
    a12: { value: '#002540e2' },
  },
  dark: {
    '1': { value: '#0d141f' },
    '2': { value: '#111a27' },
    '3': { value: '#112840' },
    '4': { value: '#113555' },
    '5': { value: '#154467' },
    '6': { value: '#1b537b' },
    '7': { value: '#1f6692' },
    '8': { value: '#197cae' },
    '9': { value: '#7ce2fe' },
    '10': { value: '#a8eeff' },
    '11': { value: '#75c7f0' },
    '12': { value: '#c2f3ff' },
    a1: { value: '#0044ff0f' },
    a2: { value: '#1171fb18' },
    a3: { value: '#1184fc33' },
    a4: { value: '#128fff49' },
    a5: { value: '#1c9dfd5d' },
    a6: { value: '#28a5ff72' },
    a7: { value: '#2badfe8b' },
    a8: { value: '#1db2fea9' },
    a9: { value: '#7ce3fffe' },
    a10: { value: '#a8eeff' },
    a11: { value: '#7cd3ffef' },
    a12: { value: '#c2f3ff' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.sky.light.1}', _dark: '{colors.sky.dark.1}' } },
  '2': { value: { _light: '{colors.sky.light.2}', _dark: '{colors.sky.dark.2}' } },
  '3': { value: { _light: '{colors.sky.light.3}', _dark: '{colors.sky.dark.3}' } },
  '4': { value: { _light: '{colors.sky.light.4}', _dark: '{colors.sky.dark.4}' } },
  '5': { value: { _light: '{colors.sky.light.5}', _dark: '{colors.sky.dark.5}' } },
  '6': { value: { _light: '{colors.sky.light.6}', _dark: '{colors.sky.dark.6}' } },
  '7': { value: { _light: '{colors.sky.light.7}', _dark: '{colors.sky.dark.7}' } },
  '8': { value: { _light: '{colors.sky.light.8}', _dark: '{colors.sky.dark.8}' } },
  '9': { value: { _light: '{colors.sky.light.9}', _dark: '{colors.sky.dark.9}' } },
  '10': { value: { _light: '{colors.sky.light.10}', _dark: '{colors.sky.dark.10}' } },
  '11': { value: { _light: '{colors.sky.light.11}', _dark: '{colors.sky.dark.11}' } },
  '12': { value: { _light: '{colors.sky.light.12}', _dark: '{colors.sky.dark.12}' } },
  a1: { value: { _light: '{colors.sky.light.a1}', _dark: '{colors.sky.dark.a1}' } },
  a2: { value: { _light: '{colors.sky.light.a2}', _dark: '{colors.sky.dark.a2}' } },
  a3: { value: { _light: '{colors.sky.light.a3}', _dark: '{colors.sky.dark.a3}' } },
  a4: { value: { _light: '{colors.sky.light.a4}', _dark: '{colors.sky.dark.a4}' } },
  a5: { value: { _light: '{colors.sky.light.a5}', _dark: '{colors.sky.dark.a5}' } },
  a6: { value: { _light: '{colors.sky.light.a6}', _dark: '{colors.sky.dark.a6}' } },
  a7: { value: { _light: '{colors.sky.light.a7}', _dark: '{colors.sky.dark.a7}' } },
  a8: { value: { _light: '{colors.sky.light.a8}', _dark: '{colors.sky.dark.a8}' } },
  a9: { value: { _light: '{colors.sky.light.a9}', _dark: '{colors.sky.dark.a9}' } },
  a10: { value: { _light: '{colors.sky.light.a10}', _dark: '{colors.sky.dark.a10}' } },
  a11: { value: { _light: '{colors.sky.light.a11}', _dark: '{colors.sky.dark.a11}' } },
  a12: { value: { _light: '{colors.sky.light.a12}', _dark: '{colors.sky.dark.a12}' } },
  default: { value: { _light: '{colors.sky.light.9}', _dark: '{colors.sky.dark.9}' } },
  emphasized: { value: { _light: '{colors.sky.light.10}', _dark: '{colors.sky.dark.10}' } },
  fg: { value: { _light: '{colors.gray.light.12}', _dark: '{colors.gray.light.12}' } },
  text: { value: { _light: '{colors.sky.light.a11}', _dark: '{colors.sky.dark.a11}' } },
})

export default {
  name: 'sky',
  tokens,
  semanticTokens,
}
