export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'neon-gradient': 'linear-gradient(45deg, #4F46E5 0%, #9333EA 50%, #3B82F6 100%)',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'gradient': 'gradient 8s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          gradient: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          }
        }
      },
    },
    plugins: [],
  }