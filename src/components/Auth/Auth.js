import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
       <div>
          <button className="btn btn-danger" onClick={this.loginClickEvent}>Logon In</button>
       </div>
        <img src="https://i.imgur.com/TUvjMar.png" width="800px"alt="logo" />
      </div>
    );
  }
}

export default Auth;
