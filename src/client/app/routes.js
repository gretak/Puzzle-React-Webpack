const React =  require('react');
const ReactRouter = require('react-router');
//import Router from 'react-router'
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Navigation = require('./NavigationComponent.jsx');
const hashHistory = ReactRouter.hashHistory;
const Header = require('./HeaderComponent.jsx');
const Footer = require('./Footer.jsx');
const Counter = require('./CounterComponent.jsx');



const routes = (
 <Router history={hashHistory}>
  <Route path='/' component={()=>(<div><Header imgNumber={20}  puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20"/></div>)}/>
  <Route path="/news" components={()=>(<div><Header imgNumber={48} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img48"/><Counter defaultProperty="Likes"/></div>)}/>
 </Router>
);

module.exports = routes;

  //<Route path='/' component={()=>(<div><Navigation/><Header/><Footer/></div>)}/>
  //<Route path="/news" components={()=>(<div><Navigation/><Header/><Counter defaultProperty="Likes"/><Footer/></div>)}/>
  //<Route path="/about" components={()=>(<div><Navigation/><Counter defaultProperty="Likes"/><Footer/></div>)}/>

