# react-native-template-haiau
This is my template react native
# Table of contents
* [Features](#features)
* [Folder Structure Conventions](#folder-structure-conventions)    
* [Installation](#installation)
* [Document](#document)
  - [Path alias](#path-alias)
* [Inspired by](#inspired-by)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)

## Features
 - React-native template
 - Reanimated v2  
 - TypeScript
 - Support path alias  
 - Eslint
 - Prettier

## Folder Structure Conventions
    .
    ├── __tests__               # Folder test
    ├── ios                     # Folder ios
    ├── android                 # Folder android
    ├── src                     # Source files
    |   ├── components          # Place contain common components
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
    
## Inspired by
[Create template for react-native](https://github.com/Esemesek/react-native-new-template)

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Pham Minh Hai Au

## License
[MIT](./LICENSE)
