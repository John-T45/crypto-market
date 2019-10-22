# Crypto Market

[![Netlify Status](https://api.netlify.com/api/v1/badges/7acf0196-460f-4259-802c-413917a69f74/deploy-status)](https://app.netlify.com/sites/crypto-market-cj/deploys)

## Table of Contents

* [Description](#user-content-description)
* [Deployment Site](#user-content-static-build-site)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Installation and Prerequisites](#user-content-installation-and-prerequisites)
* [Getting Started](#user-content-getting-started)
* [Directory Structure](#user-content-directory-structure)
* [Version Control](#user-content-version-control)
* [NPM scripts dictionary ](#user-content-npm-scripts-dictionary)


# Description
Building a simple two page/screen app used to explore prices of various cryptocurrencies available on the CoinJar platform
This application showcases a minimalistic design with a strong focus on clean code, structure & organization, documentation
and conventional commit messages for readability and generation of automated release changelogs.  

# Deployment Site
The production and Continuous Delivery is setup with Netlify.com.

The live project site can be found at: [`https://crypto-market-cj.netlify.com`](https://crypto-market-cj.netlify.com).  
For branch based build follow the link above in the `nelify` build badge.

## Tech used
This project mainly relies on the following libraries:  
React, React-Hooks, styled-components, styled-system, axios, prop-types, create-react-app.


## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: jest`


## Installation and Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/en/download/). And use the latest version of NodeJS (>= v10 preferred).

### Yarn
Yarn was used of the development of this project, alternatively `npm` can be used which is installed along with Node.js.
Note: If you decide to you `npm` instead, just replace `yarn` with `npm run` in the below commands;


Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Getting started

1. Clone this repo 
```bash
$ git clone https://github.com/praneybehl/crypto-market
$ cd crypto-market
```

2. NPM scripts dictionary Install Dependencies
```bash
$ yarn
```

3. Build the project and start local dev server.
```bash
$ yarn start
```
The development server can be accessed at http://localhost:3000

4. Build the project for production.
```bash
$ yarn build
```

5. Run Unit tests.
```bash
$ yarn test
```


## Directory Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The the structure of the project is set to follow the hierarchy:

`app <- pages  <- components`.

The project doesn't make use of any css frameworks and just the simple resets.
The rest of the folders and files only exist to make your life easier, and should not need to be changed.

Below you can find full details about significant files and folders.

```bass
.                                       // Project folder.
├── public                              // All public static assets go here.
│   ├── fonts                           // Fonts files.
│   ├── images                          // Image files.
│   └── ...
├── src                                 // Main source code directory.
│   ├── App.js                          // Main App component.
│   ├── index.js                        // React application boot.
│   ├── api                             // Api methods.
│   │   ├── __tests__                   // Api unit tests.
│   │   │   └── index.js
│   ├── constants                       // Constants for pages.
│   ├── routes                          // Routes definition.
│   ├── layouts                         // Page layouts.
│   ├── components                      // All React Components go in here.
│   │   ├── Header                      // Header component.
│   │   │   └── index.js
│   │   └── ...
│   ├── pages                           // All pages go here.
│   │   └── Home
│   ├── │   └── index.js
│   ├── theme                           // App theme folder.
│   │   ├── global.js                   // Global styles.
│   │   └── index.js                    // Project theme coinfiguration.
│   ├── serviceWorker.js
│   └── utils                           // Utility functions used in the project.
│       ├── __tests__                   // Utility unit tests.
│       ├── index.js                    // Utilities exports.
├── .editorconfig                       // Editor configuration.
├── package.json                        // Project dependencies.
└── README.md                           // Documentation for project.
```

## Version Control
This project is git version control along with [Conventional Commits](https://www.conventionalcommits.org/) 
specification for adding human and machine readable meaning to commit messages.


## NPM scripts dictionary

`yarn start`:			Start local development server.  
`yarn build`:			Creates a production build.   
`yarn test`:			Run unit tests.  
`yarn test:e2e`:		Run End-to-end tests with cypress.  
`yarn test:watch`:		Run unit tests in watch mode for development.  
`yarn cy:open`:	        Run cypress and open the cypress app.   
`yarn cy:run`:		    Run cypress in headless mode.  

