import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((result) => {
      const projectsObject = result.data;
      const projectArray = [];
      if (projectsObject !== null) {
        console.error('object keys', Object.keys(projectsObject));
        Object.keys(projectsObject).forEach((userId) => {
          console.error('userId', userId);
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
