export class KonamiCode {
  private keys: number[] = [];
  private code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  private fn: () => void;

  constructor(fn: () => void) {
    if (!(this instanceof KonamiCode)) {
      throw new Error('Constructor called as a function');
    }

    if (!(typeof fn === 'function')) {
      throw new Error('KonamiCode expects a callback function as argument');
    }

    this.fn = fn;

    document.addEventListener('keydown', this.handleKeyDown);
  }

  private handleKeyDown = (ev: KeyboardEvent) => {
    this.capture(ev.keyCode);
    this.validate();
  };

  private capture(keyCode: number) {
    this.keys.push(keyCode);
    if (this.keys.length > this.code.length) {
      this.keys.splice(0, 1);
    }
  }

  private validate() {
    if (this.keys.length === this.code.length) {
      let correct = true;
      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i] !== this.code[i]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        this.fire();
      }
    }
  }

  private fire() {
    this.fn();
  }
}

export default function konamiCode(fn: () => void) {
  return new KonamiCode(fn);
}
