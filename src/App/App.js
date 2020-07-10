import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import TheNavBar from '../components/TheNavBar/TheNavBar';
import SingleProject from '../components/SingleProject/SingleProject';
import DashBoard from '../components/DashBoard/DashBoard';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleProjectId: '',

  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setSingleProject = (projectId) => {
    this.setState({ singleProjectId: projectId });
  }

  render() {
    const { authed, singleProjectId } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed && singleProjectId.length === 0) {
        componentToLoad = <DashBoard setSingleProject={this.setSingleProject}/>;
      } else if (authed && singleProjectId.length > 0) {
        componentToLoad = <SingleProject projectId={singleProjectId} setSingleProject={this.setSingleProject}/>;
      } else {
        componentToLoad = <Auth/>;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <div>
          <TheNavBar authed={authed}/>
          {loadComponent()}

        </div>
      </div>
    );
  }
}

export default App;
