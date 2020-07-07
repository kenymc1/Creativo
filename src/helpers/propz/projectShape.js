import PropTypes from 'prop-types';

const projectShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { projectShape };
