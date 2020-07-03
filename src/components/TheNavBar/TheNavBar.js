import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './TheNavBar.scss';

class TheNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="theNavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand" href="#">Creativo</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {
                  authed
                    ? <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>
                    : ''
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TheNavBar;
