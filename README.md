# tea2-demo
This is a demo project for an Google's [Angular 2](https://angular.io/) front end with a [Express](http://expressjs.com/) api backend. Both front and backend are written using Microsoft's [Typescript](https://www.typescriptlang.org/)

## Prerequisites
To run this demo, you will require a few things.
  1. The latest LTS version of [Node.js](https://nodejs.org/en/).
  2. The latest LTS version of [npm](https://www.npmjs.com/)

## Getting Started

Once you have npm installed, run `npm install` in the top level directory of this project. This should install all required modules as defined in `package.json`. It would also be helpful to run `npm install -g typescript webpack`. The following will assume you have done this. 

After all `node_modules` are installed, you can build the UI using `webpack --config webpack/webpack.prod.js --progress --profile --bail`. This will build the modules of the angular application, which can then be found in the generated directory `dist`. The server can be built simply by running `tsc` at the top level of this project. Once the server compiled, you can then run `node ./src/server.js` to bring up the node server. Once it is running, open up your favorite browser and go to `http://localhost:3000` to bring up the UI.
  
