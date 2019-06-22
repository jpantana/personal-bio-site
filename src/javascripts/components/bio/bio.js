// import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './bio.scss';

const bioDivBuilder = (e) => {
  e.preventDefault();
  let domString = '';
  domString += `
  <div class="mainDiv" id="bioPage">
    <h2 id="aboutH1"><span id="josh2">Josh</span>Pantana</h2>
      <h3></em>software developer</em></h3>
      <p id="bio">Hello! I’m Josh Pantana. I’m a full-stack software developer residing in Nashville, TN. I have a
        serious passion for designing intuitive and inspiring UI/UX experiences. Nearly 6 months into my journey of
        becoming a full stack web developer, I'm in love with the process of creating highly functional, aesthetically engaging sites. Lets make the web a more beautiful place together!</p>
  </div>`;
  util.printToDom('mainDiv', domString);
  // buttonEvents(); // eslint-disable-line no-use-before-define
};

export default { bioDivBuilder };
