# [Battleship](https://battleship2021.herokuapp.com/)
> A game of battleship built with React, Redux, JavaScript, HTML, CSS

## Table of contents
* [General info](#general-info)
* [Play Live](#play-live)
* [Writeup](#writeup)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

Battleship is a board game that pits 2 players against each other. 
This repo contains the free game which is where the user playing on one board and the normal game which has two boards and the user plays against the AI.

### Bonus point directions


`You will notice that if you reset the browser mid-game, the entire game will reset.  The goal here is to use local storage (window.localStorage) to store the state of the game after every action.  You will still need to use React Context or Redux, so keep in mind the following concerns:
You should check that localStorage has data when the app first opens
You should update the localStorage data after each action
localStorage should ONLY be accessed through your Redux or React Context code
You should clear localStorage after the game is over (either through reset or a winner is decided)`
 

<br>

## Play Live

You can play the game at: [Link to the game](https://battleship2021.herokuapp.com/)

## Writeup

* Did you implement bonus point?
Yes, Local Storage is implemented upon changing states.
* What were some challenges you faced while making this app?
Some React features were updated and had to look at the documentation for the changes, behavior of redux and states was challenging.
Additionally, having the reducers set up for the free game and normal game was very challenging.
* Given more time, what additional features, functional or design changes would you make?
Use of dragging the ships on to the page by the user
* What assumptions did you make while working on this assignment?
The AI used for the normal game is currently just using random clicks on the board.
* How long did this assignment take to complete?
Three-four weeks



## Screenshots
![Gif](./src/assets/images/gif1.gif)

## Technologies
* HTML5
* CSS3
* React
* React redux
* JavaScript
* Bootstrap
* Local Storage

## Setup
If you dont have an IDE on your computer, you can install [Visual Code IDE](https://code.visualstudio.com/download). Then you will download the code or clone the repository.
Then you open terminal in that folder and type the command `npm install` , this will install all the dependencies in the package.json file, such as bootstrap, react, redux, react-router-dom, etc. After the installation is finished, you can use the command `npm start` to start the react server, this will open the app in your browser.



## Features
List of features ready and TODOs for future development
* Free Game
* Normal Game
* Home
* Rules


To-do list:
* Drag and drop ships on the board
* Make the AI of the Normal Game more efficient


## Status
Project is: _in progress_

## Inspiration
Project 2, practicing the use of redux

## Contact
<!-- <img src="./assets/pic1.png" width="80px"> <br> -->
Yalda Ali Aghazadeh : Developer/ Designer
[Github](https://github.com/zahraaliaghazadeh) ,
[LinkedIn](www.linkedin.com/in/zahraaliaghazadeh)

Deborah Hunt: Developer/ Designer
[Github](https://github.com/Dhunt5)




<hr>
Below is the default information about React app.
<hr>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
