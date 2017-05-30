#Products list react app
This app lists products in their corresponding categories using the [Gousto](https://www.gousto.co.uk) APIs. The app uses the [create-react-app](https://github.com/facebookincubator/create-react-app) node module.

## Set up
### Prerequisites
- [Node](https://nodejs.org/en/) / npm (see [package.json](./package.json) engine properties)

### Installation
To download all required dependencies run `npm install`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test -- --coverage`

Calculates code coverage for all test suites.

## Folder Structure

After creation, your project should look like this:

```
gousto-tech-test/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    components/
      categories/
      categoryItem/
      productItem/
      products/
      search/
        Search.js
```