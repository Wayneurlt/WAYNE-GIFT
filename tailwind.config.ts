import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lightest: '#1d2d50'
        },
        amber: '#f0b429'
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
