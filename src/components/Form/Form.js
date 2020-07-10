import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';
import authData from '../../helpers/data/authData';
import typeData from '../../helpers/data/typeData';

class Form extends React.Component {
    static propTypes = {
      saveNewProject: PropTypes.func.isRequired,
      putProject: PropTypes.func.isRequired,
      project: PropTypes.object.isRequired,
    }

    state = {
      projectName: '',
      projectClientName: '',
      projectDueDate: '',
      projectTypeId: 'type1',
      projectDescription: '',
      isEditing: false,
      projectTypes: [],
    }

    componentDidMount() {
      const { project } = this.props;
      if (project.name) {
        this.setState({
          projectName: project.name,
          projectClientName: project.clientName,
          projectDueDate: project.dueDate,
          projectTypeId: project.typeId,
          projectDescription: project.description,
          isEditing: true,
        });
      }
      this.getProjectTypes();
    }

  saveProject = (e) => {
    e.preventDefault();
    const {
      projectName,
      projectClientName,
      projectDueDate,
      projectTypeId,
      projectDescription,

    } = this.state;
    const { saveNewProject } = this.props;
    const newProject = {
      name: projectName,
      clientName: projectClientName,
      dueDate: projectDueDate,
      typeId: projectTypeId,
      description: projectDescription,
      uid: authData.getUid(),
    };
    saveNewProject(newProject);
  }

projectChange = (e) => {
  e.preventDefault();
  this.setState({ projectName: e.target.value });
}

clientChange = (e) => {
  e.preventDefault();
  this.setState({ projectClientName: e.target.value });
}

dateChange = (e) => {
  e.preventDefault();
  this.setState({ projectDueDate: e.target.value });
}

typeChange = (e) => {
  e.preventDefault();
  this.setState({ projectTypeId: e.target.value });
}

descriptionChange = (e) => {
  e.preventDefault();
  this.setState({ projectDescription: e.target.value });
}

updateProject = (e) => {
  e.preventDefault();
  const { project, putProject } = this.props;
  const {
    projectName,
    projectClientName,
    projectDueDate,
    projectTypeId,
    projectDescription,
  } = this.state;
  const updatedProject = {
    name: projectName,
    clientName: projectClientName,
    dueDate: projectDueDate,
    typeId: projectTypeId,
    description: projectDescription,
    uid: authData.getUid(),
  };
  putProject(project.id, updatedProject);
}

getProjectTypes = () => {
  typeData.getTypes()
    .then((projectTypes) => this.setState({ projectTypes }))
    .catch((err) => console.error('unable to get types', err));
}

render() {
  const {
    projectName,
    projectClientName,
    projectDueDate,
    projectTypeId,
    projectDescription,
    isEditing,
    projectTypes,
  } = this.state;

  const buildTypeList = () => projectTypes.map((type) => (
  <option key={type.id} value={type.id}>{type.name}</option>
  ));
  return (
      <div className="projectForm">
        <form className="col-6 offset-3">

          <div className="form-group">
            <label htmlFor="form-project">Project Name</label>
            <input
            type="text"
            className="form-control"
            id="form-projectName"
             placeholder="Project Name"
             value={projectName}
             onChange={this.projectChange}
            required
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-client">Client Name</label>
            <input
            type="text"
            className="form-control"
            id="form-client"
            placeholder="Client Name"
            value={projectClientName}
             onChange={this.clientChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-client">Due Date</label>
            <input
            type="text"
            className="form-control"
            id="form-client"
            placeholder="Due Date"
            value={projectDueDate}
             onChange={this.dateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-type">Project Type</label>
            <select
          className="form-control"
          id="form-type"
          placeholder="Project Type"
            value={projectTypeId}
             onChange={this.typeChange}
            >
              {buildTypeList()}
            </select>
          </div>

          <div className="form-group" >
            <label htmlFor="form-Description" >Description</label>
            <input
            type="textarea"
            className="form-control"
            id="form-Description"
            placeholder="Description"
            value={projectDescription}
             onChange={this.descriptionChange}
            />
          </div>
          { isEditing
            ? <button className="btn btn-primary" onClick={this.updateProject}>Update Project</button>
            : <button className="btn btn-primary" onClick={this.saveProject}>Add Project</button>

          }

      </form>

    </div>
  );
}
}

export default Form;
