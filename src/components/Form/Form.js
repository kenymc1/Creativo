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
    // dueDate: '',
    // typeId: '',
    // description: '',
    }

    componentDidMount() {
      const { project } = this.props;
      if (project) {
        this.setState({ projectName: project.Name, projectClientName: project.clientName });
      }
    }

  saveProject = (e) => {
    e.preventDefault();
    const { projectName, projectClientName } = this.state;
    const { saveNewProject } = this.props;
    const newProject = {
      name: projectName,
      clientName: projectClientName,
      // dueDate,
      // typeId,
      // description,
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

// dateChange = (e) => {
//   e.preventDefault();
//   this.setState({ dueDate: e.target.val });
// }

// typeChange = (e) => {
//   e.preventDefault();
//   this.setState({ projectName: e.target.val });
// }

// descriptionChange = (e) => {
//   e.preventDefault();
//   this.setState({ description: e.target.val });

render() {
  const { projectName, projectClientName } = this.state;

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

          <button className="btn btn-primary" onClick={this.saveProject}>ADD</button>

      </form>

    </div>
  );
}
}

export default Form;
