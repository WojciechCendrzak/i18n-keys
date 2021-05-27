import { reduceObject } from './reduce';
import { isString } from './string';
import { TranslateCollection } from './types';

export const getTranslationKeys = <T extends TranslateCollection>(translationObject: T): T =>
  getTranslationKeysNested(translationObject);

const getTranslationKeysNested = <T extends TranslateCollection>(translationObject: T, path = ''): T =>
  translationObject
    ? reduceObject(
        translationObject,
        (accumulator: T, value: TranslateCollection | string, key: string) => {
          const newPath = `${path}${path ? '.' : ''}${key}`;
          return {
            ...accumulator,
            [key]: isString(value) ? newPath : getTranslationKeysNested(value, newPath),
          };
        },
        {} as T
      )
    : translationObject;
