import React from 'react';
import PropTypes from 'prop-types';

import './DashBoard.scss';

import projectData from '../../helpers/data/projectData';
import authData from '../../helpers/data/authData';

import Form from '../Form/Form';
import ProjectCard from '../ProjectCard/ProjectCard';

class DashBoard extends React.Component {
  static propTypes = {
    setSingleProject: PropTypes.func.isRequired,
  }

  state = {
    projects: [],
    formOpen: false,
    editProject: {},
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

  putProject= (projectId, updatedProject) => {
    projectData.updateProject(projectId, updatedProject)
      .then(() => {
        this.getAllProjects();
        this.setState({ formOpen: false, editProject: {} });
      })
      .catch((err) => console.error('unable to update projects:', err));
  }

  editAProject = (project) => {
    this.setState({ formOpen: true, editProject: project });
  }

  render() {
    const { projects, formOpen, editProject } = this.state;
    const { setSingleProject } = this.props;
    const buildProjects = projects.map((project) => <ProjectCard key={projects.id} project={project} editAProject={this.editAProject} removeCard={this.removeCard} setSingleProject={setSingleProject}/>);
    return (

      <div className="DashBoard">

          <button className="btn btn-primary m align-center"onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus-square"></i></button>
        { formOpen ? <Form saveNewProject={this.saveNewProject} project={editProject} putProject={this.putProject}/> : ''}

              <div className=" d-flex flex-wrap">
                {buildProjects}
              </div>
      </div>
    );
  }
}

export default DashBoard;
