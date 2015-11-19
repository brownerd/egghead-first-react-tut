# Egghead React App Tut

I am attemptig to tackle this the [Build Your First React.js App](https://egghead.io/series/build-your-first-react-js-application) from Egghead after recently completing the [REACT FOR BEGINNERS](https://reactforbeginners.com/) by Wes Bos.

## Notes

I know that everything has changed, thus the egghead tut can't use the latest React Router, Babel or whatever else. But I figured I'd give it a go anyway.


## Challenge 1
I'm totally new to Webpack. I followed [Using ES6 and ES7 in the Browser, with Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/) to get Webpack set up.

## Challenge 2

The routing is totally different with the latest React Router. I've been using [REACT FOR BEGINNERS](https://reactforbeginners.com/) to figure out the routing.

## Challenge 3

I can't seem to get past the routing part of this. I can load the entry route fine, but when I switch to another route I get a `Cannot GET /` error.

To get the routes to change correctly I had to use:
-  [pushState With Webpack-dev-server](http://jaketrent.com/post/pushstate-webpack-dev-server/)
- [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
- [react-config](https://github.com/jaketrent/react-config)
- [html-webpack-template](https://github.com/jaketrent/html-webpack-template)

There has got to be a better way that this! Holy shit.

## Challenge 4

...to come...
