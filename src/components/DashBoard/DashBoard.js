import React from 'react';
import PropTypes from 'prop-types';

import './DashBoard.scss';
import {
  DropdownItem, DropdownMenu, Dropdown, DropdownToggle,
} from 'reactstrap';

import projectData from '../../helpers/data/projectData';
// import authData from '../../helpers/data/authData';

import Form from '../Form/Form';
import ProjectCard from '../ProjectCard/ProjectCard';
import typeData from '../../helpers/data/typeData';
import smash from '../../helpers/data/smash';

class DashBoard extends React.Component {
  static propTypes = {
    setSingleProject: PropTypes.func.isRequired,
  }

  state = {
    projects: [],
    formOpen: false,
    editProject: {},
    selectedType: '',
    typesList: [],
    dropdownTypeOpen: false,
  }

toggleDropdownType = () => {
  this.setState({ dropdownTypeOpen: !this.state.dropdownTypeOpen });
}

  getAllProjects = () => {
    smash.projectsWithType()
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('cant get projects: ', err));
  }

  componentDidMount() {
    this.getAllProjects();
    this.getTypesList();
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

  getTypesList = () => {
    typeData.getTypes()
      .then((typesList) => this.setState({ typesList }))
      .catch((err) => console.error('cant get types', err));
  }

  render() {
    const {
      projects, formOpen, editProject, typesList, dropdownTypeOpen,
    } = this.state;
    const { setSingleProject } = this.props;
    // eslint-disable-next-line max-len
    const buildProjects = projects.map((project) => <ProjectCard key={project.id} project={project} editAProject={this.editAProject} removeCard={this.removeCard} setSingleProject={setSingleProject}/>);
    const filterByType = (typeId) => {
      this.setState({ selectedType: typeId });
      smash.projectsWithType()
        .then((fbProjects) => {
          const filterList = fbProjects.filter((project) => project.typeId === this.state.selectedType);
          this.setState({ projects: filterList });
          projects.map((project) => <ProjectCard key={projects.id} project={project} editAProject={this.editAProject} removeCard={this.removeCard} setSingleProject={setSingleProject}/>);
        })

        .catch((err) => console.error('could not get projects', err));
    };
    const buildTypesList = () => typesList.map((type) => (
                <DropdownItem key={type.id} value={type.id} onClick={() => filterByType(type.id)}>{type.name}</DropdownItem>
    ));

    return (

      <div className="DashBoard">
        <div className="row justify-content-center col-12">
              <div className="col-sm-4">
                <Dropdown isOpen={dropdownTypeOpen} toggle={this.toggleDropdownType}>
                  <DropdownToggle caret>
                    See Projects by Type
                    </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem divider />
                    {buildTypesList()}
                  </DropdownMenu>
                </Dropdown>
              </div>
              </div>
          <button className="btn btn-primary  align-center"onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus-square"></i></button>

        { formOpen ? <Form saveNewProject={this.saveNewProject} project={editProject} putProject={this.putProject}/> : ''}

              <div className=" d-flex flex-wrap ">
                {buildProjects}
              </div>
      </div>
    );
  }
}

export default DashBoard;
