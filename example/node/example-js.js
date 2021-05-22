const i18next = require('i18next');
const en = require('./locales/en.json');
const keys = require('i18n-keys');

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: en },
  },
});

const translationKeys = keys.getTranslationKeys(en);

console.log(
  `translation for key '${translationKeys.sectionOne.subsectionOne.description}' is '${i18next.t(
    translationKeys.sectionOne.subsectionOne.description
  )}'`
);
