export class KonamiCode {
  private sequence: number[] = [];
  private code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  private callback: () => void;

  constructor(callback: () => void) {
    if (!(this instanceof KonamiCode)) {
      throw new Error('Constructor called as a function');
    }

    if (typeof callback !== 'function') {
      throw new Error('KonamiCode expects a callback function as argument');
    }

    this.callback = callback;

    document.addEventListener('keydown', this.handleKeyDown);
  }

  private handleKeyDown = (ev: KeyboardEvent) => {
    this.capture(ev.keyCode);
    this.validate();
  };

  private capture(keyCode: number) {
    this.sequence.push(keyCode);
    if (this.sequence.length > this.code.length) {
      this.sequence.splice(0, 1);
    }
  }

  private validate() {
    if (this.sequence.length === this.code.length) {
      let correct = true;
      for (let i = 0; i < this.sequence.length; i++) {
        if (this.sequence[i] !== this.code[i]) {
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
    this.callback.apply(this);
  }

  public remove() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

export default function konamiCode(callback: () => void) {
  return new KonamiCode(callback);
}
