type Iteratee<T> = (accumulator: T, value: T | string, key: string) => T;

export const reduceObject = <T>(collection: T, iteratee: Iteratee<T>, initialAccumulator: T): T =>
  collection
    ? Object.entries(collection).reduce(
        (accumulator, [key, value]) => iteratee(accumulator, value, key),
        initialAccumulator
      )
    : collection;
