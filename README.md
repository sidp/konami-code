# konami-code

![Build status](https://circleci.com/gh/sidp/konami-code.svg?style=shield&circle-token=60f119a2a516a777d99653c82df8c0cf7403cd52)

This is a small Javascript library to call functions when the user enters the Konami Code.

> ↑ ↑ ↓ ↓ ← → ← → B A

## Usage

Install the package from npm:

```sh
npm install @sidp/konami-code
```

Import the package into your project. Add a function by passing it as an argument to the konamiCode function.

```js
import konamiCode from '@sidp/konami-code';

konamiCode(() => {
  /* do stuff */
});
```

If you want to remove the listener, call the remove() function on the returned object, or on `this` in the callback function:

```js
const kc = konamiCode(() => {
  /* do stuff */
});
kc.remove();

// - or -

konamiCode(function() {
  /* do stuff */
  this.remove();
});
```

## Browser support

This library supports all modern browsers, including Internet Explorer 9 and better.
