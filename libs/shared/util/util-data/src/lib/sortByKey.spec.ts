import { sortByKey } from './sortByKey';

describe('sortByKey', () => {
  it('should sort by a key of type number', () =>
    expect(
      sortByKey(
        [
          { x: 1, y: 'a' },
          { x: 2, y: 'b' },
          { x: 3, y: 'c' },
        ],
        'x',
        (a, b) => b - a
      )
    ).toEqual([
      { x: 3, y: 'c' },
      { x: 2, y: 'b' },
      { x: 1, y: 'a' },
    ]));

  it('should sort by a key of type string', () =>
    expect(
      sortByKey(
        [
          { x: 1, y: 'a' },
          { x: 2, y: 'b' },
          { x: 3, y: 'c' },
        ],
        'y',
        (a, b) => (a > b ? -1 : 1)
      )
    ).toEqual([
      { x: 3, y: 'c' },
      { x: 2, y: 'b' },
      { x: 1, y: 'a' },
    ]));

  it('should not mutate the provided array', () => {
    const data = [
      { x: 1, y: 'a' },
      { x: 2, y: 'b' },
      { x: 3, y: 'c' },
    ];
    expect(sortByKey(data, 'x', (a, b) => a - b)).not.toBe(data);
  });
});
