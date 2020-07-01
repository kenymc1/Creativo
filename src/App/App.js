import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import TheNavBar from '../components/TheNavBar/TheNavBar';
// import Form from '../components/Form/Form';
import DashBoard from '../components/DashBoard/DashBoard';
import projectData from '../helpers/data/projectData';

import './App.scss';
import ProjectCard from '../components/ProjectCard/ProjectCard';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,

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

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <DashBoard/>;
      } else {
        componentToLoad = <Auth/>;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <TheNavBar authed={authed}/>
        {/* <h1>Creativo</h1> */}
        {loadComponent()}
      </div>
    );
  }
}

export default App;
