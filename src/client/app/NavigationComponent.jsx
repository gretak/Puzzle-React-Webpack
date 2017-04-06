import React from 'react';


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