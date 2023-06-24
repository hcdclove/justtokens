// ******************JustApp*****************
// A Just token dispenser for users to request free tokens to be used in the justDapps
// like the JustApp Messenger.
//
// Author: Hernan Clarke
// Using ReachJS to build the front end
// Language: Javascript and Motoko

import React from 'react';

function Header() {
  return (
    <header>
      <div className='blue window' id='logo'>
        <h1>
          <span role='img' aria-label='tap emoji'>
            💎
          </span>
          DSurv
        </h1>
      </div>
    </header>
  );
}

export default Header;
