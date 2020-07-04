import React from 'react';
import PropTypes from 'prop-types';

import './ProjectCard.scss';
import projectShape from '../../helpers/propz/projectShape';

class ProjectCard extends React.Component {
  static propTypes = {
    projects: projectShape.projectShape,
    removeCard: PropTypes.func.isRequired,
    editAProject: PropTypes.func.isRequired,
  }

  deleteCardEvent = (e) => {
    e.preventDefault();
    const { project, removeCard } = this.props;
    removeCard(project.id);
  }

  editProjectEvent = (e) => {
    e.preventDefault();
    const { editAProject, project } = this.props;
    editAProject(project);
  }

  render() {
    const { project } = this.props;
    return (

      <div className="col-4">
        <div id="accordion">
              <div className="card offset-1" >
                  <div className="card-header" id="headingOne">
                    <h4 className="mb-0 row">
                       <button className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {project.name}
                       </button>
                      <div className="delete-x ml-auto" onClick={this.deleteCardEvent}><i className="fas fa-times"></i></div>
                    </h4>
                  </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
               <div className="card-body">
                <h3>{project.clientName}</h3>
                  <h5>{project.dueDate}</h5>
                  <p>{project.description}</p>
                <button className="btn btn-warning" onClick={this.editProjectEvent}><i class="fas fa-edit"></i></button>
               </div>
            </div>

            </div>

        </div>
      </div>

    );
  }
}

export default ProjectCard;
