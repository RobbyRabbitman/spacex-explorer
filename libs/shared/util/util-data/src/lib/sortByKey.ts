/**
 *
 * @param array
 * @param key
 * @param sortFn
 * @returns a non-deep sorted copy of the provided array
 */
export function sortByKey<T, K extends keyof T>(
  array: Array<T>,
  key: K,
  sortFn: (a: T[K], b: T[K]) => number
): Array<T> {
  return Array.of(...array).sort((a, b) => sortFn(a[key], b[key]));
}
