import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';
import authData from '../../helpers/data/authData';

class Form extends React.Component {
    static propTypes = {
      saveNewProject: PropTypes.func.isRequired,
      putProject: PropTypes.func.isRequired,
      project: PropTypes.object.isRequired,
    }

    state = {
      projectName: '',
      projectClientName: '',
      ProjectDueDate: '',
      projectTypeId: '',
      projectDescription: '',
      isEditing: false,
    }

    componentDidMount() {
      const { project } = this.props;
      if (project.name) {
        this.setState({
          projectName: project.name,
          projectClientName: project.clientName,
          ProjectDueDate: project.dueDate,
          projectTypeId: project.typeId,
          projectDescription: project.description,
          isEditing: true,
        });
      }
    }

  saveProject = (e) => {
    e.preventDefault();
    const {
      projectName,
      projectClientName,
      ProjectDueDate,
      projectTypeId,
      projectDescription,

    } = this.state;
    const { saveNewProject } = this.props;
    const newProject = {
      name: projectName,
      clientName: projectClientName,
      dueDate: ProjectDueDate,
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
  this.setState({ projectType: e.target.value });
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
    ProjectDueDate,
    projectTypeId,
    projectDescription,
  } = this.state;
  const updatedProject = {
    name: projectName,
    clientName: projectClientName,
    dueDate: ProjectDueDate,
    typeId: projectTypeId,
    description: projectDescription,
    uid: authData.getUid(),
  };
  putProject(project.id, updatedProject);
}

render() {
  const {
    projectName,
    projectClientName,
    projectDueDate,
    projectType,
    projectDescription,
    isEditing,
  } = this.state;

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
            <label htmlFor="form-date">Due Date</label>
            <input
            type="date"
            className="form-control"
            id="form-date"
            placeholder="Client Name"
            value={projectDueDate}
             onChange={this.dateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-type">Project Type</label>
            <select id="form-typ" name="types">
              <option value="Music">Music</option>
              <option value="Photography">Photography</option>
              <option value="Graphics">Graphics</option>
              <option value="Video">Video</option>
            </select>
            <input
            type="text"
            className="form-control"
            id="form-type"
            placeholder="Type"
            value={projectType}
             onChange={this.typeChange}
            />
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
