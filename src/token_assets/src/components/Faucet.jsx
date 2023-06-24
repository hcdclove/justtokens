// ******************JustApp*****************
// A Just token dispenser for users to request free tokens to be used in the justDapps
// like the JustApp Messenger.
//
// Author: Hernan Clarke
// Using ReachJS to build the front end
// Language: Javascript and Motoko

import React, { useState } from 'react';
import { canisterId, createActor } from '../../../declarations/token';
import { AuthClient } from '@dfinity/auth-client';

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState('Gimme gimme');

  async function handleClick(event) {
    setDisable(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity
      }
    });

    const result = await authenticatedCanister.payOut();
    setText(result);
  }

  return (
    <div className='blue window'>
      <h2>
        <span role='img' aria-label='tap emoji'>
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free JUST tokens here! Claim 10,000 JUST tokens to{' '}
        {props.userPrincipal}.
      </label>
      <p className='trade-buttons'>
        <button id='btn-payout' onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
