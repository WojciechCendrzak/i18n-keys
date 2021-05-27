[![Build Status](https://travis-ci.com/WojciechCendrzak/i18n-keys.svg?branch=main)](https://travis-ci.org/WojciechCendrzak/i18n-keys)
[![Coverage Status](https://coveralls.io/repos/github/WojciechCendrzak/i18n-keys/badge.svg)](https://coveralls.io/github/WojciechCendrzak/i18n-keys)
[![npm version](https://badge.fury.io/js/i18n-keys.svg)](https://badge.fury.io/js/i18n-keys)
![npm bundle size](https://img.shields.io/bundlephobia/min/i18n-keys)

# i18n-keys

This library will help to access the translation field from `JSON` / `TypeScript` file and take advantage of TypeScript.

It is useful when the localization file grows. Works fine with `i18n`,` i18next`.

The idea is simple, handy, and quite helpful:

Instead of accessing field by a string path like this:

```ts
i18next.t('homePage.header.buttons.signIn.title');
```

you can access translation key in that way:

```ts
i18next.t(translationKeys.homePage.header.buttons.signIn.title);
```

The only thing you need to do is to initialize `translationKeys` object like:

```ts
import en from './en.json'; // or `./en.ts`
import i18next from 'i18n-js';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: en,
    },
  },
});

const translationKeys = getTranslationKeys(en);
```

You can enjoy the benefits of `TypeScript` as well as `IntelliSense` of your IDE and `lint`.

Then you can use like this:

```ts
const text = i18next.t(translationKeys.homePage.header.buttons.signIn.title);
```

Check the example folder!
