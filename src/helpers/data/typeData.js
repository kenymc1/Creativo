import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/types.json`)
    .then((result) => {
      const allTypes = result.data;
      const types = [];
      if (allTypes !== null) {
        Object.keys(allTypes).forEach((typeId) => {
          allTypes[typeId].id = typeId;
          types.push(allTypes[typeId]);
        });
      }
      resolve(types);
    })
    .catch((err) => reject(err));
});

export default { getTypes };
