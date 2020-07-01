import React from 'react';
// import PropTypes from 'prop-types';

import './DashBoard.scss';

import projectData from '../../helpers/data/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';
import authData from '../../helpers/data/authData';

class DashBoard extends React.Component {
  state = {
    projects: [],

  }

  getAllProjects = () => {
    projectData.getProjectsByUid(authData.getUid())
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('cant get projects: ', err));
  }

  componentDidMount() {
    this.getAllProjects();
  }

  // removePlayer = (playerId) => {
  //   console.log('player', playerId);
  //   playersData.deletePlayer(playerId).then(() => this.getAllPlayers())
  //     .catch((err) => console.error('unable to delete board', err));
  // }

  // saveNewPlayer = (newPlayer) => {
  //   playersData.savePlayer(newPlayer)
  //     .then(() => {
  //       this.getAllPlayers();
  //       this.setState({ formOpen: false });
  //     })
  //     .catch((err) => console.error('unable to save player: ', err));
  // }

  // putPlayer = (playerId, updatePlayer) => {
  //   playersData.updatePlayer(playerId, updatePlayer)
  //     .then(() => {
  //       this.getAllPlayers();
  //       this.setState({ formOpen: false, editPlayer: {} });
  //     })
  //     .catch((err) => console.error('unable to update player:', err));
  // }

  // editPlayer = (player) => {
  //   this.setState({ formOpen: true, editPlayer: player });
  // }

  render() {
    // const { formOpen } = this.state;
    const { projects } = this.state;
    // const { editPlayer } = this.state;
    const buildProjects = projects.map((project) => <ProjectCard key={projects.id} project={project}/>);
    return (

      <div className="DashBoard">

        <div className="d-flex flex-wrap">
          {buildProjects}
        </div>
      </div>
    );
  }
}
export default DashBoard;
