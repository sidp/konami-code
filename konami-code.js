var KonamiCode = (function () {
  "use strict";

  function KonamiCode(fn) {
    if (!(this instanceof KonamiCode)) {
      throw new Error("Constructor called as a function");
    }

    this.keys = [];
    this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.fn = fn || function () {};

    document.addEventListener('keydown', function (ev) {
      this.capture(ev.keyCode);
      this.validate();
    }.bind(this));
  }

  KonamiCode.prototype.capture = function capture (code) {
    this.keys.push(code);
    if (this.keys.length > this.code.length) {
      this.keys.splice(0, 1);
    }
  }

  KonamiCode.prototype.validate = function validate () {
    var correct = true;
    if (this.keys.length === this.code.length) {
      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i] != this.code[i]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        this.fire();
      }
    }
  }

  KonamiCode.prototype.fire = function fire () {
    this.fn();
  }

  return KonamiCode;
})();
