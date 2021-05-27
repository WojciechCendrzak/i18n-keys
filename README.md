# i18n-keys

This library will help to access the translation field from `JSON` / `TypeScript` file and take advantage of TypeScript.

It is useful when the localization file grows. Works well for `i18n` and `i18next` and for any Front End or Back End libraries.

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

You can enjoy the benefits of `TypeScript` as well as `IntelliSense` of your IDE and `linting`.

Then you can use like this:

```ts
const text = i18next.t(translationKeys.homePage.header.buttons.signIn.title);
```

Check the examples!
