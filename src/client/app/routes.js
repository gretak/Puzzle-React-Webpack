const React =  require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Navigation = require('./NavigationComponent.jsx');
const Header = require('./HeaderComponent.jsx');
const Footer = require('./Footer.jsx');
const Counter = require('./CounterComponent.jsx');

const routes = (
 <Router>
  <Route path="/" components={()=>(<div><Navigation/><Header/><Footer number="03308098788"/></div>)}/>
  <Route path="/news" components={()=>(<div><Navigation/><Header/><Counter defaultProperty="Likes"/><Footer/></div>)}/>
  <Route path="/about" components={()=>(<div><Navigation/><Counter defaultProperty="Likes"/><Footer/></div>)}/>
 </Router>
);

module.exports = routes;