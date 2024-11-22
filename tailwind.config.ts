// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
}

export default config
