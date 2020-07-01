import PropTypes from 'prop-types';

const projectShape = PropTypes.shape({
  ProjectName: PropTypes.string.isRequired,
  Client: PropTypes.string.isRequired,
  DateDue: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  TypeId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { projectShape };
