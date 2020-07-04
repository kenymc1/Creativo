import React from 'react';
import PropTypes from 'prop-types';
import './SingleProject.scss';
import projectData from '../../helpers/data/projectData';

class SingleProject extends React.Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired,
    setSingleProject: PropTypes.func.isRequired,
  }

  state = {
    project: {},
    SingleProjects: [],

  }

  componentDidMount() {
    const { projectId } = this.props;
    projectData.getSingleProject(projectId)
      .then((request) => {
        const project = request.data;
        this.setState({ project });
      })
      .catch((err) => console.error('unable to get singleBoard:'));
  }

  render() {
    const { setSingleProject } = this.props;
    const { project } = this.state;
    return (
      <div className="SingleProject">
    <div className="d-flex">
      <div className="card  card align-center col-6">
            <button className="btn ml-auto " onClick={() => { setSingleProject(''); }}>X</button>
           <div className="card-body">
             <h3 className="card-title">{project.name}</h3>
             <h4>{project.clientName}</h4>
             <h3>{project.dueDate}</h3>
             <h4>{project.typeId}</h4>
             <p>{project.description}</p>
           </div>
      </div>
    </div>
      </div>
    );
  }
}

export default SingleProject;
