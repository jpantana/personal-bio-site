import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './projects.scss';

// import img1 from '../../../../imgs/pine.png';
// import img2 from '../../../../img.movies.png';
// import img3 from '../../../../imgs/tama.png';

const createProjectCards = () => {
  projectsData.getProjectData()
    .then((projects) => {
      let domString = '';
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].available === true) {
          domString += `
          <div class="projContainerCol">
            <div class="myCard bounceIn slideInUp" style="visibility: visible; animation-delay: 0s; animation-name: slideInUp;">
              <h2 class="titleH2">${projects[i].title}</h2>
              <img class="projImage" src="${projects[i].image}">
              <hr>
              <div class="techAndDescrip>
                
                  <p class="jsDescrip"><span class="descripSpan">Description...</span><br>${projects[i].description}</p>
                
                <hr>
                <p class="jsTech"><span class="techUsed">Technolgies Used...</span></br>${projects[i].technologiesUsed}</p>
              </div>
              <hr>
              <div class="projectLinksDiv">
                <p class="projectLinks">Project Links...</p>
                <a class="jsLinks" href="${projects[i].url}" target="_blank">${projects[i].title}</a><br>
                <a class="jsLinks" href="${projects[i].githubUrl}" target="_blank">GitHub</a>
              </div>
          </div>`;
        }
      }
      util.printToDom('mainDiv', domString);
    }).catch(err => console.error('not retreiving projects', err));
};


export default { createProjectCards };
