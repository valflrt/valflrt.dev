# React Template

The react template I created and that I use, very simple and with typescript for those who **don't want** to use `create-react-app`.

- [React Template](#react-template)
  - [Features](#features)
    - [More information](#more-information)
  - [How to use](#how-to-use)
  - [Running](#running)

## Features

**Routing** (react-router-dom) and **css-modules** are implemented already so you can use them right away !

### More information

- **routing**
  - The ["router"](src/router/Router.tsx) and an [example route](src/routes/Main.tsx)
- **css-modules**
  - An [example of css module file](src/layout/Layout.module.css) and [its implementation](src/layout/Layout.tsx)
- **simple css**
  - You can also create simple css files (global styles for example). see [`globalStyles.css`](src/globalStyles.css)

## How to use

First initialize an empty repository (if not done already):

```
git init
```

Then pull from this template to your repository:

```
git pull https://github.com/valflrt/typescript-react-template.git
```

You're done !

## Running

Two preset options are available:

- `npm start` - Starts live version for development (open **localhost:3000** on your computer)
- `npm run build` - Creates an optimized build for deployment (**build** directory on the project root)
