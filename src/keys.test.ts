import { getTranslationKeys } from './keys';

describe(getTranslationKeys.name, () => {
  describe.each`
    translations                              | translationsKeys
    ${undefined}                              | ${undefined}
    ${null}                                   | ${null}
    ${{}}                                     | ${{}}
    ${{ message: 'test message' }}            | ${{ message: 'message' }}
    ${{ group: { message: 'test message' } }} | ${{ group: { message: 'group.message' } }}
    ${{ k1: { k2: '', k3: { k4: '' } } }}     | ${{ k1: { k2: 'k1.k2', k3: { k4: 'k1.k3.k4' } } }}
  `('Translations object $translations', ({ translations, translationsKeys }) => {
    test(`returns ${translationsKeys}`, () => {
      expect(JSON.stringify(getTranslationKeys(translations), null, 2)).toBe(JSON.stringify(translationsKeys, null, 2));
    });
  });
});
