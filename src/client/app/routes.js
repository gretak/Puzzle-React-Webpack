const React =  require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const Welcome = require('./WelcomeComponent.jsx').default;
const levelcontainer = require('./containers/levelContainer.jsx').default;
const levelcontainername = require('./containers/levelContainername.jsx').default;


const routes = (
 <Router history={hashHistory}>
  <Route path='/' 
    components={Welcome}
  />
  <Route path="/level/:id"
    components={levelcontainer}
  />
  <Route path="/levelsuccess/:id"
   components={levelcontainername}
  />
 </Router>
);

export default routes;
