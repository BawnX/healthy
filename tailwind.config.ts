import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#11D758',
          secondary: '#5AB0DD'
        } // light theme colors
      },
      dark: {
        colors: {
          primary: '#2C603F',
          secondary: '#134259',
          background: '#1D1C1C'
        } // dark theme colors
      }
    }
  })]
}
export default config
