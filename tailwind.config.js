module.exports = {
  theme: {
    extend: {
      colors: {
        hephaestus: {
          primary: '#00FFFF', // Cyan
          secondary: '#FF00FF', // Magenta
          accent: '#FFFF00', // Yellow
          background: {
            dark: '#05051A', // Darker blue
            light: '#0A0A2E', // Slightly lighter blue
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
          },
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.hephaestus.primary"), 0 0 20px theme("colors.hephaestus.primary")',
        'neon-soft': '0 0 10px theme("colors.hephaestus.primary/30")',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};