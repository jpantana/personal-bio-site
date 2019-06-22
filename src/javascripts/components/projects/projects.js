import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './projects.scss';

const createProjectCards = () => {
  projectsData.getProjectData()
    .then((projects) => {
      console.error(projects);
      let domString = '';
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].available === true) {
          domString += `
            <div class="myCard">
            <h2 class="titleH2">${projects[i].title}</h2>
            <img class="projectImages" src="${projects[i].screenshot}"/>
            <p class="jsDescrip"><strong>Description:</strong> ${projects[i].description}</p>
            <p class="jsTech"><strong>Technolgies Used:</strong></br> ${projects[i].technologiesUsed}</p>
            <div class="projectLinksDiv">
              <a class="jsLinks" href="${projects[i].url}">${projects[i].title}</a><br>
              <a class="jsLinks" href="${projects[i].githubUrl}">GitHub</a>
            </div>
          </div>`;
        }
      }
      util.printToDom('mainDiv', domString);
    }).catch(err => console.error('not retreiving projects', err));
};


export default { createProjectCards };
