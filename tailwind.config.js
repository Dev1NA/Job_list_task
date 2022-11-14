/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        s: [
          '16px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],
        l: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],
        xl: [
          '16px',
          {
            lineHeight: '25px',
            letterSpacing: '0.23619px',
            fontWeight: '400',
          },
        ],

        xll: [
          '18px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.5625px',
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
        xxl: [
          '24px',
          {
            lineHeight: '30px',
            letterSpacing: '-0.75px',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '28px',
          {
            lineHeight: '34px',
            letterSpacing: '0.413333px',
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

        xl: { max: '1178px' },
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
