import PropTypes from 'prop-types';

const projectShape = PropTypes.shape({
  Name: PropTypes.string.isRequired,
  Client: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  TypeId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { projectShape };
