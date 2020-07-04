import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allProjectsObj = result.data;
      const projects = [];
      if (allProjectsObj !== null) {
        Object.keys(allProjectsObj).forEach((projectId) => {
          const newProject = allProjectsObj[projectId];
          newProject.id = projectId;
          projects.push(newProject);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});
const deleteCard = (projectId) => axios.delete(`${baseUrl}/projects/${projectId}.json`);

const saveProject = (newProject) => axios.post(`${baseUrl}/projects.json`, newProject);

const updateProject = (projectId, updatedProject) => axios.put(`${baseUrl}/projects/${projectId}.json`, updatedProject);

export default {
  getProjectsByUid,
  deleteCard,
  saveProject,
  updateProject,
};
