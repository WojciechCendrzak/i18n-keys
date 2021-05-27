import { reduceObject } from './reduce';

describe(reduceObject.name, () => {
  describe.each`
    objectToReduct    | expected
    ${undefined}      | ${undefined}
    ${null}           | ${null}
    ${{}}             | ${{}}
    ${{ a: 1 }}       | ${{ a: '1' }}
    ${{ a: 1, b: 2 }} | ${{ a: '1', b: '2' }}
  `('', ({ objectToReduct, expected }) => {
    test(`objectToReduct ${JSON.stringify(objectToReduct)} gives ${JSON.stringify(expected)}`, () => {
      expect(
        JSON.stringify(
          reduceObject(objectToReduct, (acc, value, key) => ({ ...acc, [key]: `${value}` }), {}),
          null,
          2
        )
      ).toBe(JSON.stringify(expected, null, 2));
    });
  });
});
