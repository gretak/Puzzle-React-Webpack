# Puzzle-React-Webpack
### Segment for React, using Webpack


To start the project clone the repository and run ```npm install```.

Run ```npm run server``` comand which will start the webpack, localhost dev server, watch task and linting.

Go to ```http://localhost:5005``` to see the server running.

### Github Link
[https://github.com/gretak/React-Webpack.git](https://github.com/gretak/React-Webpack.git)

### The structure
```src/client``` is the main project folder, all configuration files are in the root. <br />
```src/client/public``` is the production folder, created with webpack command.<br />
```src/client/app``` is the folder with all the components used for the project.<br />
```src/client/assets/img``` is the folder with all the images used for the project.<br />
```src/client/sass``` is the folder with all the sass files, named as relevant components.<br />


### Webpack
 routing + contex, PropTypes, FaceboookButton
 plugins (CopyWebpackPlugin, ExtractTextPlugin, OptimiseAssetsPlugin,HTMLwebpackPlugin...)


**This project was created using the following links for support:**
- [https://www.codementor.io/reactjs/tutorial/](https://www.codementor.io/reactjs/tutorial/)
- [beginner-guide-setup-reactjs-environment-npm-babel-6-webpack](beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)
- [https://facebook.github.io/react/docs/conditional-rendering.html](https://facebook.github.io/react/docs/conditional-rendering.html)
- [https://online.reacttraining.com/courses/reactjsfundamentals/](https://online.reacttraining.com/courses/reactjsfundamentals/)
- [https://www.youtube.com/watch?v=PEXcg8xu2y0&index=2&list=PLLnpHn493BHFfs3Uj5tvx17mXk4B4ws4p](https://www.youtube.com/watch?v=PEXcg8xu2y0&index=2&list=PLLnpHn493BHFfs3Uj5tvx17mXk4B4ws4p)


**TODO list:**
- 1.Refactor - ES6 and ES5 mix in the code -->kind a done
- 3.Change or get rid of the navigation --> helps to skip to the next level without completing the puzzle (so let it be for now)
- 5.Use lifecycle events in the app (used compoenentWillMount and constructor to set state)
- 6.Update share button to have correct title and the image (facebook developers)
- 7. Use propTypes through the app.
- 8. React dev tools installed as an extension, explore how it can help to debug.
- 9. Find out about Redux and introduce to this app.
- 10. Update the server with the latest --> done.
- 11. Instructions how to play, congratulation text and containers optimization (DRY) --> done.



