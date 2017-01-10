var React =  require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Navigation = require('../src/client/app/NavigationComponent');
var Header = require('../src/client/app/HeaderComponent');

var routes = (
 <Router>
  <Route path="/" component={Navigation}>
    <Route path="/home" component={Header}/>
  </Route>
 </Router>
);

module.exports = routes;