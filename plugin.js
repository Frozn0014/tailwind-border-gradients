const plugin = require('tailwindcss/plugin');

const borderGradient = plugin(
  function ({ addUtilities, theme, e }) {
    const linearDirections = theme('linearDirections');
    const linearUtilities = Object.entries(linearDirections).map(([key, value]) => {
      return {
        [`.${e(`border-gradient-to-${key}`)}`]: {
          borderImage: `linear-gradient(${value}, var(--tw-gradient-stops)) 10`
        }
      };
    });

    const radialShapes = theme('radialShapes');
    const radialUtilities = Object.entries(radialShapes).map(([key, value]) => {
      return {
        [`.${e(`border-radial-${key}`)}`]: {
          borderImage: `radial-gradient(${value} at center, var(--tw-gradient-stops)) 10`
        }
      };
    });

    addUtilities([linearUtilities, radialUtilities]);
  },
  {
    theme: {
      linearDirections: {
        r: 'to right',
        l: 'to left',
        t: 'to top',
        b: 'to bottom',
        tr: 'to top right',
        tl: 'to top left',
        br: 'to bottom right',
        bl: 'to bottom left'
      },
      radialShapes: {
        circle: 'circle',
        ellipse: 'ellipse'
      }
    }
  }
);

module.exports = borderGradient;
