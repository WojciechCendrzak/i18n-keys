export const isString = (value: unknown): value is string => value !== null && typeof value === 'string';
