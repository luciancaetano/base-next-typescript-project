# React Next.js Basic Typescript Redux Starter

# package.json scripts
- `start: dev` starts the server with a development environment
- `start: prod` starts the server with a production environment
- `build: dev` compiles the application with a development environment
- `build: prod` compiles the application with a production environment
- `lint` tests the code using eslint
- `lint: fix` tries to correct lint errors

## Presentation
This project is a collection of all the experience practiced with react and other frameworks like angular, now I come to bring the community this experience so that it helps people to organize their personal or professional projects. I will also be grateful for the evolution of it, so I am making available about a free MIT license

## Definitions
- Alias: Alias ​​is a mapping to a file or directory of the application's source code. Its settings are in the file `tsconfig.paths.json` to learn more see https://www.typescriptlang.org/docs/handbook/module-resolution.html, note that aliases ending with `/*` indicate a directory so it must be imported with the desired file name and simple aliases import the file index.ts from the directory.

## Organization
Great use is made of eslint to organize the code as well as the structure of the project.
Below are listed the organizations by directory and their alias to be imported.


### src/media
Here are the media files such as icons, images, svg etc.

Its alias is `@media/*`.

Ex: `import logo from '@media/logo.svg'`
### src/locale
Here are located the settings and dictionaries of the library [i18next] (https://www.i18next.com/) which helps us to implement support for multiple languages ​​in react.
Their structure is quite simple in the languages ​​folder, the dictionaries are separated by namespaces which are imported, organized and exported in the index.ts file of each language folder.
This directory does not contain an alias.

### src/app
Here the application itself is located.

### ./components
To better organize the project, the components and their uses in react were categorized.
- All elements, views and partials are exported as default then they are exported with a nomenclature by the index.ts of the respective folders.

#### ./components/elements
In this folder are located the basic elements of the application interface such as buttons, links inputs etc.
- Note that each component is located in a folder with the same name followed by its own css.
- All components must be exported on index.ts

Its alias is `@components/elements`.

Ex: `import {Button} from '@components/elements`

#### ./components/partials
In this folder are located components composed and created with a more specific purpose, we can put here menus and layout items among others.
- Note that each component is located in a folder with the same name followed by its own css.
- All components must be exported on index.ts

Its alias is `@components/partials`.

Ex: `import {MobileHeader, TabletHeader, WebHeader} from '@components/partials`



#### ./components/hooks
With the arrival of react-hooks, it became necessary to create some customized hooks as the need arises during the development of the application, so here are the customized hooks.
- All hooks must be exported to index.ts
- All hoks must be exported on index.ts

Its alias is `@components/hooks`.

Ex: `import {useDevice} from '@components/hooks`

### ./config
Here are the general settings of the application such as api routes or routes of the router itself, among other configurations.

Its alias is `@config/*`.

Ex: `import themeColors from '@config/theme'`

### ./utils
In this folder are the functions, constants and other tools reusable by the application.

### ./types
In the application mainly with redux we need to organize the typing as well as other utilities, then in this folder are the global types of the application such as `IAppState` which maps the entire state of the application in redux.
- All types must be exported on index.ts

Its alias is `@types.

Ex: `import {IAppState} from '@types

### ./redux/actions
Here, all action creators and redux constants are defined.
All action files must end with `.actions.ts`
- Note that the actions creators are grouped into an object and thus exported isolating the context and thus avoiding naming conflicts as well as their simplification.

Its alias is `@redux/actions/*`.

Ex: `import {todoActions} from '@redux/actions/todoActions`

### ./redux/reducers
Reducers are defined here.
Reducers are mapped in the `index.ts` file.

All reducer files must end with `.reducer.ts`

Pay close attention as the reducers mapped here must be mapped in the `IAppState` interface.

## Concepts
Use and abuse types.
When using a redux state map using the `IAppState` interface

EX: `const todosState = useSelector ((state: IAppState) => state.todos.todos);`


This helps to avoid naming errors as well as type errors or when trying to access a null or undefined attribute.
