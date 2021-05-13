# Get Started with PVX_Programming :rocket:

## Setup :construction:
1. Fork and clone this repository.
2. Run `npm install`.
3. Run `npm start` to run the app in development mode.

## Structure :books:
* ### **`index.js`** :page_with_curl:
  Entry point of our react app, where all the set up for `react-router`, `redux`, `msw` etc will be done.
* ### **`app.js`** :page_with_curl:
  In `app.js` all the initial setup for routes and global ui components is done.
* ### **assets** :file_folder:
  Here all the assets of the apps are stored.
* ### **components** :file_folder:
  Here all the reusable UI components are stored.
* ### **containers/view (TBD)** :file_folder:
  Here all the pages of the apps are stored.
* ### **mocks**
  Here all the files associated with mocking api requests are stored. more on mocks below.

## Mocks :see_no_evil:
### **What is mocking?**
Mocks is like an imitation. It simulates behaviour of real API, which on senging request to endpoint returns pre-defined response and other parameters associated such as response code, headers etc.


### **How?**
We're using [msw (mock service worker)](https://mswjs.io/) library for mocking.
We have mocks folder under `src`.

#### **`handler.js`** :page_with_curl:
Here all the different endpoints are defined for wchich we want to mock api request.
#### **`browser.js`** :page_with_curl:
Here the worker is configured with all the handlers from `handler.js` file. and further used in `index.js` to start mock server.
#### **seed** :file_folder:
Here all the data is defined. it is not necessary to create file in seed, you can also use js objects as well.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
