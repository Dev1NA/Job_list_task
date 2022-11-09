/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xl: [
          '16px',
          {
            lineHeight: '25px',
            letterSpacing: '0.23619px',
            fontWeight: '400',
          },
        ],
        '2xl': [
          '20px',
          {
            lineHeight: '25px',
            letterSpacing: '-0.625px',
            fontWeight: '700',
          },
        ],
        sm: ['16px', '25px'],
        base: ['18px', '24px'],
        lg: ['20px', '25px'],
      },
      colors: {
        main: '#3A4562',
        grey: '#878D9D',
      },
      width: {
        66: '66px',
        85: '85px',
        400: '400px',
      },
      height: {
        66: '66px',
        85: '85px',
      },
      padding: {
        16: '16px',
        24: '24px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
