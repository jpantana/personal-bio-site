// import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './bio.scss';

import 'bootstrap';

const bioDivBuilder = (e) => {
  e.preventDefault();
  let domString = '';
  domString += `
  <div class="mainDiv" id="bioPage">
    <h2 id="aboutH1"><span id="josh2">Josh</span>Pantana</h2>
      <h3 class="h3"></em>software developer</em></h3>
      <p id="bio">Hey there! I’m Josh Pantana. Among other things, I’m a full-stack web developer residing in Nashville, TN. 
      I have a serious passion for creating a highly functional,  intuitive, and 
      inspired web experience. I believe the web best serves the user when it is both aesthetically stimulating, 
      and operationally friction-free. I’m versed in JavaScript (with a React emphasis) and (will be learning) .NET (with a C# emphasis). Let’s 
      make the web a more beautiful place together!</p>
  </div>`;
  util.printToDom('mainDiv', domString);
  // buttonEvents(); // eslint-disable-line no-use-before-define
};

export default { bioDivBuilder };
