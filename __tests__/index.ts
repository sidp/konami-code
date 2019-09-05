import konamiCode, { KonamiCode, sameSequence } from '../src/index';

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function pressKey(keyCode: number) {
  document.dispatchEvent(new KeyboardEvent('keydown', { keyCode } as any));
}

describe('konamiCode', () => {
  it('returns a KonamiCode instance', () => {
    const kc = konamiCode(() => {});
    expect(kc instanceof KonamiCode).toBe(true);
  });

  it('registers pressed keys', () => {
    const presses = [37, 66, 38];
    const kc = konamiCode(() => {});
    presses.forEach(pressKey);
    expect(kc.sequence[0]).toBe(presses[0]);
    expect(kc.sequence[1]).toBe(presses[1]);
    expect(kc.sequence[2]).toBe(presses[2]);
  });

  it('only stores as many presses as the code is long', () => {
    const kc = konamiCode(() => {});
    const presses = Array.from(Array(kc.code.length + 5), (x, i) => i);
    presses.forEach(pressKey);
    expect(kc.sequence.length).toBe(kc.code.length);
  });

  it('calls the callback function', () => {
    const callback = jest.fn();
    const kc = konamiCode(callback);
    code.forEach(pressKey);
    expect(callback.mock.calls.length).toBe(1);
  });

  it('calls the callback when receieving earlier keypresses', () => {
    const callback = jest.fn();
    const kc = konamiCode(callback);
    [20, 30, 40].forEach(pressKey);
    code.forEach(pressKey);
    expect(callback.mock.calls.length).toBe(1);
  });

  it('can remove listener', () => {
    const callback = jest.fn();
    const kc = konamiCode(callback);
    code.forEach(pressKey);
    kc.remove();
    code.forEach(pressKey);
    expect(callback.mock.calls.length).toBe(1);
  });

  it('can call remove from closure', () => {
    const callback = jest.fn();
    const kc = konamiCode(function() {
      callback();
      this.remove();
    });
    code.forEach(pressKey);
    code.forEach(pressKey);
    expect(callback.mock.calls.length).toBe(1);
  });
});

describe('sameSequence', () => {
  it('is true if they are the same', () => {
    const same = sameSequence([0, 9, 2], [0, 9, 2]);
    expect(same).toBe(true);
  });
  it('is false if they are not the same', () => {
    const same = sameSequence([5, 2, 4], [2, 1, 5]);
    expect(same).toBe(false);
  });
});
