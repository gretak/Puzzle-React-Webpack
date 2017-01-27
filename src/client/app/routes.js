const React =  require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const Welcome = require('./WelcomeComponent.jsx').default;
const levelcontainer = require('./containers/levelContainer.jsx').default;

 
const routes = (
 <Router history={hashHistory}>
  <Route path='/' 
    components={Welcome}
  />
  <Route path="/levelone" 
    imgNumber={20} puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20" link="/"
    components={levelcontainer}
  />
  <Route path="/leveltwo"
   imgNumber={30} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img30" link="#/levelone"
   components={levelcontainer}
  />
  <Route path="/levelthree"
   imgNumber={48} puzzleLevel="puzzleLevelThree" puzzleClass="puzzle_img48" link="#/leveltwo"
   components={levelcontainer}
  />
  <Route path="/levelone/success"
   imgNumber={20} puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20" link="/" level="20" buttonText="Next level"
   components={levelcontainer}
  />
  <Route path="/leveltwo/success"
   imgNumber={30} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img30" link="#/levelone" level="30" buttonText="Next level"
  />
  <Route path="/levelthree/success"
   imgNumber={48} puzzleLevel="puzzleLevelThree" puzzleClass="puzzle_img48" link="#/leveltwo" level="48" buttonText="Next level"
  />
 </Router>
);

export default routes;
