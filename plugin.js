const plugin = require('tailwindcss/plugin');

const borderGradient = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('direction');
    const utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`border-gradient-to-${key}`)}`]: {
          borderImage: `linear-gradient(${value}, var(--tw-gradient-stops)) 10`
        }
      };
    });

    addUtilities(utilities);
  },
  {
    theme: {
      direction: {
        r: 'to right',
        l: 'to left',
        t: 'to top',
        b: 'to bottom',
        tr: 'to top right',
        tl: 'to top left',
        br: 'to bottom right',
        bl: 'to bottom left'
      }
    }
  }
);

module.exports = borderGradient;
