/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Adex-inspired color scheme
        'violet-blue': 'hsla(234, 50%, 64%, 1)',
        'dark-cornflower': 'hsla(214, 88%, 27%, 1)',
        'cultured': 'hsla(220, 20%, 97%, 1)',
        'lavender-web': 'hsla(233, 52%, 94%, 1)',
        'cadet-blue': 'hsla(220, 12%, 70%, 1)',
        'charcoal': 'hsla(218, 22%, 26%, 1)',
        'raisin-black': 'hsla(216, 14%, 14%, 1)',
        'light-gray': 'hsla(0, 0%, 79%, 1)',
        'blue-crayola': 'hsla(219, 72%, 56%, 1)',
        'black-coral': 'hsla(220, 12%, 43%, 1)',
        
        // Original colors (keeping for compatibility)
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        navy: {
          900: "#0F0F23",
          800: "#161B2E",
          700: "#1E2337",
          600: "#252A42",
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  }
};