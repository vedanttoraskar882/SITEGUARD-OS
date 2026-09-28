/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050811',
          card: '#0a101d',
          glass: 'rgba(10, 16, 29, 0.75)',
          surface: '#0f172a',
        },
        navy: {
          950: '#030712',
          900: '#050a18',
          850: '#081126',
          800: '#0c1836',
          700: '#14254b',
          600: '#1e3a6c',
        },
        accent: {
          emerald: '#10b981',
          DEFAULT: '#10b981',
          light: '#34d399',
          glow: '#059669',
          neon: '#00ff88',
          dark: '#047857',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
        'glow': '0 0 25px -2px rgba(16, 185, 129, 0.35)',
        'glow-lg': '0 0 50px -5px rgba(16, 185, 129, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar': 'radar 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
