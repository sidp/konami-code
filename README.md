# konami-code.js
This is a small Javascript library to call functions when the user enters the Konami Code.
> ↑ ↑ ↓ ↓ ← → ← → B A

## Example
Add a function by passing it as an argument to the KonamiCode constructor. Check the [example file](https://cdn.rawgit.com/sidp/konami-code-js/master/example.html) if you want to try it out.
```
var konamiCode = new KonamiCode(function () {
  alert('Yay!');
});
```

## Browser support
This library supports all modern browsers, including Internet Explorer 9 and better.
