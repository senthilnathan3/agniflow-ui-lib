import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@agniflow-ui/panda-preset'
import amber from '@agniflow-ui/panda-preset/colors/amber'
import sand from '@agniflow-ui/panda-preset/colors/sand'

export default defineConfig({
  preflight: true,
  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react', // or solid or vue
  outdir: 'styled-system',
})
