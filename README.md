# Unquork Interview Test

---
Like always ! -> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This *documentation* tries to cover the main components and functions it does not cover everything but serves as an example, I used *JSDoc*.

The same way the *testing* is not planing to do a full coverage but a demonstration on the setup I like to use, focusing on the use of *a11y* labels to select elements aka role, this is important since allows you to test and at the same time ensure that the components have some basic *a11y*.

Lately being dedication a good amount of time creating scripts to improve *developer experience* and *CI/CD* for UI applications, I tried to show that here in a basic way via the `start` script which should build and open all the docs and app.

Another element that I think is crucial in apps is *localization*, as you will see ( or already saw ) I used react-intl to localize the app, is again some basic localization, ideally you would like to have a harvester that would get the strings from all the components to create the english dictionary and then send that english dictionary for translation to get the other languages, here since I speak spanish I did the translation myself.

*Styles* are not my strong at this moment in time, is being quite some time since I use a design system to do my UI work so I'm a little bit rusted when it comes to styling apps, I decided to use react-spectrum, an Adobe open source design system to help with the layout.

Thanks !

---
## Available Scripts

In the project directory, you can run:

### `yarn prettier`

It will format the entire project using the default prettier config

### `yarn start`

It will build the documentation for you and open it in chrome, it will build the UI and then it will start the server and open chrome in [http://localhost:3006](http://localhost:3006)

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn docs`

Builds the documentation for you and opens chrome to view the output of the documentation

### `yarn ssr`

Starts the server, waits for it to be up and then opens chrome in [http://localhost:3006](http://localhost:3006)

### `yarn server`

Starts the server using node

### `yarn server:dev`

Starts the server using nodemon, any change on the server code restarts the server app

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
