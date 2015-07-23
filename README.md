# konami-code.js
This is a small Javascript library to call functions when the user enters the Konami Code.
> ↑ ↑ ↓ ↓ ← → ← → B A

## Usage
Add a function by passing it as an argument to the KonamiCode constructor. Check the [example file](https://cdn.rawgit.com/sidp/konami-code-js/master/example.html) if you want to try it out.

The library can either be loaded with a simple script tag or with a dependency manager such as RequireJS or Browserify. It supports both AMD or CommonJS.

#### Plain file example
```
<script src="konami-code.js"></script>
<script>
  var kc = new KonamiCode(function () {
    /* do stuff */
  });
</script>
```

#### AMD example
```
require(['konami-code'], function (KonamiCode) {
  var kc = new KonamiCode(function () {
    /* do stuff */
  });
});
```

#### CommonJS example
```
var KonamiCode = require('./konami-code.js');
var kc = new KonamiCode(function () {
  /* do stuff */
});
```

## Browser support
This library supports all modern browsers, including Internet Explorer 9 and better.
