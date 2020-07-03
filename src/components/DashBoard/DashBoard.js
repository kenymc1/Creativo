import React from 'react';
// import PropTypes from 'prop-types';

import './DashBoard.scss';

import projectData from '../../helpers/data/projectData';
import authData from '../../helpers/data/authData';

import Form from '../Form/Form';
import ProjectCard from '../ProjectCard/ProjectCard';

class DashBoard extends React.Component {
  state = {
    projects: [],
    formOpen: false,
  }

  getAllProjects = () => {
    projectData.getProjectsByUid(authData.getUid())
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('cant get projects: ', err));
  }

  componentDidMount() {
    this.getAllProjects();
  }

  removeCard = (projectId) => {
    projectData.deleteCard(projectId).then(() => this.getAllProjects())
      .catch((err) => console.error('unable to delete card', err));
  }

  saveNewProject = (newProject) => {
    projectData.saveProject(newProject)
      .then(() => {
        this.getAllProjects();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('unable to save project: ', err));
  }

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
    const { projects, formOpen } = this.state;
    // const { editPlayer } = this.state;
    const buildProjects = projects.map((project) => <ProjectCard key={projects.id} project={project} removeCard={this.removeCard}/>);
    return (

      <div className="DashBoard">

          <button className="btn btn-warning align-center"onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus-square"></i></button>
        { formOpen ? <Form saveNewProject={this.saveNewProject}/> : ''}

              <div className=" d-flex flex-wrap">
                {buildProjects}
              </div>
      </div>
    );
  }
}
export default DashBoard;
