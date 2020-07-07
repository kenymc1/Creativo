import projectData from './projectData';
import typeData from './typeData';
import authData from './authData';

const projectsWithType = (projectId) => new Promise((resolve, reject) => {
  const uid = authData.getUid();
  projectData.getProjectsByUid(uid)
    .then((allProjects) => {
      typeData.getTypes()
        .then((allTypes) => {
          const finalProjects = [];
          allProjects.forEach((eachProject) => {
            const selectedType = allTypes.find((x) => x.id === eachProject.typeId);
            const projectCopy = { ...eachProject };
            projectCopy.selectedType = selectedType;
            finalProjects.push(projectCopy);
          });
          resolve(finalProjects);
        });
    })
    .catch((err) => reject(err));
});

export default { projectsWithType };
