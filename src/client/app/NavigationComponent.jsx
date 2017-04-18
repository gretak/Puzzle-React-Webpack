import React from 'react';
// import { combineReducers, createStore } from "redux";

// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case "CHANGE_NAME": {
//       state = {...state, name: action.payload}
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: action.payload}
//       break;
//     }
//   }
//   return state;
// };

// const tweetsReducer = (state=[], action) => {
//   return state;
// };

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// })

// const store = createStore(reducers);

// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })

// store.dispatch({type: "CHANGE_NAME", payload: "Will"})
// store.dispatch({type: "CHANGE_AGE", payload: 35})
// store.dispatch({type: "INC", payload: 1})
// store.dispatch({type: "INC", payload: 11})
// store.dispatch({type: "INC", payload: 10})
// store.dispatch({type: "DEC", payload: 1})



function navFunction() {
    var x = document.getElementById('myTopnav');
    console.log(screen.width)
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}


class NavigationComponent extends React.Component {

  render() {

    const topnav = ['Level/20', 'Level/30', 'Level/48', 'Contact']
    const navigationMenu = topnav.map(function(topnavitem){
      return <li className='topnav_item' key={topnavitem}><a className='topnav_link' href={'#'+topnavitem}>{topnavitem}</a></li>
    });

    return (
      <div>
        <ul className='topnav' id='myTopnav'>
          {navigationMenu}
          <li className='topnav_icon'>
            <a className='topnav_link' href='javascript:void(0);' onClick={navFunction}>&#9776;</a>
          </li>
        </ul>
      </div>
    );
  }

}

export default NavigationComponent;