// ******************JustApp*****************
// A Just token dispenser for users to request free tokens to be used in the justDapps
// like the JustApp Messenger.
//
// Author: Hernan Clarke
// Using ReachJS to build the front end
// Language: Javascript and Motoko

import React from 'react';
import Header from './Header';
import Faucet from './Faucet';
import Balance from './Balance';
import Transfer from './Transfer';

function App(props) {
  return (
    <div id='screen'>
      <Header />
      <Faucet userPrincipal={props.loggedInPrincipal} />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
