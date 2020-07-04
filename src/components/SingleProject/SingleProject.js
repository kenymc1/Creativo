import React from 'react';
import PropTypes from 'prop-types';
import './SingleProject.scss';

class SingleProject extends React.Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired,
    setSingleProject: PropTypes.func.isRequired,
  }

  render() {
    const { projectId, setSingleProject } = this.props;

    return (
      <div className="SingleProject">
        <button className="btn btn-danger" onClick={() => { setSingleProject(''); }}>X</button>
        <h2> Project View</h2>
        <h3>{projectId}</h3>
      </div>
    );
  }
}

export default SingleProject;
