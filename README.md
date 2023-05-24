# tailwind-border-gradients

Adds the ability to use gradients on borders inside your [Tailwind CSS](https://tailwindcss.com/) project

## Installation

```
npm install tailwind-border-gradients
```

Inside your `tailwind.config.js` file, require the plugin inside the plugins option

```js
module.exports = {
  plugins: [require('tailwind-border-gradients')]
};
```

---

## Usage

You can apply a border gradient to an element by using the utility class `border-gradient-to-{direction}`.

```html
<h1 class="border-2 border-gradient-to-br from-red-500 to-blue-500">Border Gradients!</h1>
```

<img src="https://i.ibb.co/KNrKyQR/image.png" width=256>

---

## Custom Colors

This plugin uses Tailwind's gradient color stops, which include all default colors and colors defined in your `tailwind.config.js` file.

Example:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        myColor: '#5cb6f7',
        myOtherColor: '#c4ff8a'
      }
    }
  }
};
```

In this case, to create a border gradient using your custom colors, you would use:

```html
<h1 class="border-{size} border-gradient-to-{direction} from-myColor to-myOtherColor">Text</h1>
```

---
