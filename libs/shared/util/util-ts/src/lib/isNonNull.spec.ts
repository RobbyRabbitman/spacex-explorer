import { isNonNull } from './isNonNull';

describe('isNonNull for null and undefined', () => {
  it('should be false for null', () => expect(isNonNull(null)).toBe(false));
  it('should be false for undefined', () =>
    expect(isNonNull(undefined)).toBe(false));
  it('should be the same value for null and undefined', () =>
    expect(isNonNull(undefined)).toBe(isNonNull(null)));
});

describe('isNonNull for primitives', () => {
  it("should be true for 'true'", () => expect(isNonNull(true)).toBe(true));
  it("should be true for 'false'", () => expect(isNonNull(false)).toBe(true));
  it('should be true for 0', () => expect(isNonNull(0)).toBe(true));
  it('should be true for -1', () => expect(isNonNull(-1)).toBe(true));
  it('should be true for 1', () => expect(isNonNull(1)).toBe(true));
  it("should be true for 'someString'", () =>
    expect(isNonNull('someString')).toBe(true));
  it('should be true for an empty string', () =>
    expect(isNonNull('')).toBe(true));
  it('should be true for a symbol', () =>
    expect(isNonNull(Symbol())).toBe(true));
});
