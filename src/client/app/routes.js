const React =  require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Navigation = require('./NavigationComponent.jsx');
const hashHistory = ReactRouter.hashHistory;
const Header = require('./HeaderComponent.jsx');
const Footer = require('./Footer.jsx');
const Counter = require('./CounterComponent.jsx');
const Welcome = require('./WelcomeComponent.jsx');

//level containers
const levelonecontainer = require('./containers/leveloneContainer.jsx');
const leveltwocontainer = require('./containers/leveltwoContainer.jsx');
const levelthreecontainer = require('./containers/levelthreeContainer.jsx');



const routes = (
 <Router history={hashHistory}>
  <Route path='/' components={Welcome}/>
  <Route path="/levelone" components={levelonecontainer}/>
  <Route path="/leveltwo" components={leveltwocontainer}/>
  <Route path="/levelthree" components={levelthreecontainer}/>
  <Route path="/levelone/success" components={()=>(<div><Navigation /><Header imgNumber={20} puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20"/><Counter level="20"/></div>)}/>
  <Route path="/leveltwo/success" components={()=>(<div><Navigation /><Header imgNumber={30} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img30"/><Counter level="30"/></div>)}/>
 </Router>
);

module.exports = routes;
