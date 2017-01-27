const React =  require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Navigation = require('./NavigationComponent.jsx').default;
const hashHistory = ReactRouter.hashHistory;
const Header = require('./HeaderComponent.jsx').default;
const Footer = require('./Footer.jsx').default;
const Counter = require('./CounterComponent.jsx').default;
const Welcome = require('./WelcomeComponent.jsx').default;

//level containers
const levelonecontainer = require('./containers/leveloneContainer.jsx').default;
const leveltwocontainer = require('./containers/leveltwoContainer.jsx').default;
const levelthreecontainer = require('./containers/levelthreeContainer.jsx').default;

 
const routes = (
 <Router history={hashHistory}>
  <Route path='/' components={Welcome}/>
  <Route path="/levelone" components={levelonecontainer}/>
  <Route path="/leveltwo" components={leveltwocontainer}/>
  <Route path="/levelthree" components={levelthreecontainer}/>
  <Route path="/levelone/success" components={()=>(<div><Navigation /><Header imgNumber={20} puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20" link="/"/><Counter level="20" buttonText="Next level"/></div>)}/>
  <Route path="/leveltwo/success" components={()=>(<div><Navigation /><Header imgNumber={30} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img30" link="/"/><Counter level="30" buttonText="Next level"/></div>)}/>
 <Route path="/levelthree/success" components={()=>(<div><Navigation /><Header imgNumber={48} puzzleLevel="puzzleLevelThree" puzzleClass="puzzle_img48" link="/"/><Counter level="48" buttonText="Start again"/></div>)}/>
 </Router>
);

export default routes;
