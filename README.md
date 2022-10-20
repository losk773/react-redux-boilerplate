# React RTK Boilerplate

- React 18
- React Router 6
- Redux Toolkit
- Typescript
- Styled Components
- Webpack

## Install

- `npm i`
- create `.env.development` based on `.env.example`
- set env varibale `API_BASE_URL=https://jsonplaceholder.typicode.com/`
- `npm start`

## Structure 

### Features

Folder: `src/features` should contains any business-logic of application. All files in this folder are divided into modules.

Module is an isolated part of an application that is responsible for an isolated piece of functionality.

- `components` - all components that uses in the module
- `containers`- "smart components", that includes any logic for working with data
- `constants` - all constants for module
- `redux` - files for working with redux (slices, selectors etc.)
- `requests` - any requests of data to backend
- `hooks` - react-hooks
- `utils / utils.ts` - any utilities for additional functionality
- `index.ts` - all components (reducers, containers etc.), that will use out of this module should be init or exports here
