import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((result) => {
      const projectsObject = result.data;
      const projectArray = [];
      if (projectsObject !== null) {
        Object.keys(projectsObject).forEach((userId) => {
          projectsObject[userId].id = userId;
          projectArray.push(projectsObject[userId]);
        });
      }
      resolve(projectArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getProjectData };
