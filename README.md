# Weather Widget

Generated on 2018-11-12 using
[generator-boilerplatev@2.2.5](https://github.com/viperfx07/generator-boilerplatev)

## Description
- generator-boilerplatev is a Yeoman generator that generates a boilerplate of common web apps structure.
- The main app is built using React which enables to create reusable components as building blocks of our apps.
- Inside js folder, it contains two folders, **components** and **utils**
- **components** is divided into 
	* **base** which contains for basic/dumb components
	* other folders are for smart components, i.e. WeatherWidget
- **utils** contains re-usable methods
- **components** and **utils** are separated into different folders and files to easily manage, re-use and test, i.e. unit-testing.
- One interesting function worth mentioned is called (**sureThing**)[https://medium.com/@jesterxl/easier-error-handling-using-async-await-b9ab0cb938e] by Jaison Kaiser. Usually, when we use Promise, we have to prepare a try and catch block, that will catch the error thrown from the reject callback. However, to simplify it, instead of rejecting, we always use a resolve to return an object which contains the status of the response and data or error when it's successful or failed request.

## Assumptions
* Use the weather icon pack from OpenWeather which is different from the design provided
* The form entry is not stored thus refreshing the browser will reset the app to initial state
* Font used is Lato

## Technology Stack

JavaScript
- [Webpack](http://webpack.js.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Pug](http://pugjs.org/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Git](https://git-scm.com/)


## Setup
1. Install node or install nvm (node version required is >= 8)
2. Install yarn and gulp: `npm i -g yarn gulp`
3. Run yarn: `yarn`
4. Run gulp serve: `gulp serve`
