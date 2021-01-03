# react-native-template-haiau
This is project create template boilerplate for react-native
# Table of contents
* [Features](#features)
* [Features Optional](#features-optional)  
* [Folder Structure Conventions](#folder-structure-conventions)    
* [Installation](#installation)
* [Document](#document)
  - [Path alias](#path-alias)
  - [Commit lint](#commit-lint)
  - [Add custom fonts](#add-custom-fonts)
  - [Add support multiple language](#add-support-multiple-language)
* [Inspired by](#inspired-by)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)

## Features
 - React-native template
 - [Reanimated v2](https://docs.swmansion.com/react-native-reanimated/docs)  
 - [TypeScript](https://www.typescriptlang.org/)
 - [Support path alias](https://www.npmjs.com/package/babel-plugin-module-resolver)  
 - [React navigation](https://reactnavigation.org/docs/getting-started)
 - [React navigation shared element](https://github.com/IjzerenHein/react-navigation-shared-element)  
 - [Styled components](https://styled-components.com/)  
 - [Recoil](https://recoiljs.org/)
 - [Eslint](https://eslint.org/)
 - [Prettier](https://prettier.io/)
 - [Commit lint](https://github.com/conventional-changelog/commitlint)
 - [Husky](https://www.npmjs.com/package/husky)
 - [Lint-staged](https://www.npmjs.com/package/lint-staged)
 - [Config variables for React Native apps](https://github.com/luggit/react-native-config)
 - [React native vector icons](https://github.com/oblador/react-native-vector-icons)
 - Support custom fonts

## Features Optional
 - [Support i18n](https://github.com/i18next/react-i18next)

## Folder Structure Conventions
    .
    ├── __tests__               # Folder test
    ├── ios                     # Folder ios
    ├── android                 # Folder android
    ├── src                     # Source files
    |   ├── assets              # Place contain images, fonts ...
    |   |   ├── fonts           # Place contain custom fonts
    |   ├── components          # Place contain common components
    |   ├── routes              # Place contain react navigation
    |   ├── screens             # Place contain screens
    |   ├── stores              # Place contain global stores recoil
    |   ├── styles              # Place contain styled theme global
    ├── LICENSE
    └── README.md


## Installation
```
npx react-native init <name project> --template react-native-template-haiau
```

## Document

### Path alias
- The project used library [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) to support path alias import file
- Guide used: 
  - Step 1: Create any directory in the folder `src`
  - Step 2: Run command for the auto-apply new folder in path alias
    ```
    npx react-native add-path-alias
    ```

### Commit lint   
- Guide used advanced commit lint custom rule scope:
- Assume you want to commit code with a prefix `CMS-XXXX` with `XXXX` is number ticket of project

Example: 
```
git commit -m "CMS-0001: Commit template"
```
- Please custom file `commitlint.config.json`:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [2, 'always'],
    'subject-empty': [2, 'always'],
    'scope-enum': [0], // level: disabled
    'function-rules/scope-enum': [
      2, // level: error
      'always',
      (parsed) => {
        const scopeEnum = parsed.header.split(':');
        const scopes = [
          {
            regex: /CMS-(\d+)/g,
            messageError: 'scope must is format CMS-XXXX',
          },
        ];
        const getIndex = scopes.findIndex(
          (scope) => scope.regex.test(scopeEnum) === false,
        );
        if (getIndex === -1) {
          return [true];
        }
        return [false, scopes[getIndex].messageError];
      },
    ],
  },
};
```
### Add custom fonts
- Step 1: Add the font you want into the directory `./src/assets/fonts`
- Step 2: Run command linking
  ```
  npx react-native link
  ```

### Add support multiple language
- Support detect language device
```
npx react-native add-i18n
```
if you want custom advanced i18n please reference the link [i18n](https://react.i18next.com/)

## Inspired by
[Create template for react-native](https://github.com/Esemesek/react-native-new-template)

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Pham Minh Hai Au

## License
[MIT](./LICENSE)
