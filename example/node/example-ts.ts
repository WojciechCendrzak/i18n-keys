import { getTranslationKeys } from 'i18n-keys';
import i18next from 'i18next';
import en from './locales/en.json';

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: en },
  },
});

const translationKeys = getTranslationKeys(en);

console.log(
  `translation for key '${translationKeys.sectionOne.subsectionOne.description}' is '${i18next.t(
    translationKeys.sectionOne.subsectionOne.description
  )}'`
);
