// import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './technologies.scss';

const techDivBuilder = (e) => {
  e.preventDefault();
  const domString = `
<div id="triangleBackground">
  <div class="fullPage" id="technologiesPage">
    <h1 class="" id="techProf">Technologies</h1>
  </div>
    <ul class="tech-container">
      <li>
        <div class="techImgDiv">
            <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/html5.png" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
            <h3 class="techH3">HTML5</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".15" class="techImg wow bounceIn logo-width" src="imgs/css3.png" style="visibility: visible; animation-delay: .5s; animation-name: pulse;">
            <h3 class="techH3">CSS3</h3>
          </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/JS6_Logo.png" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">JavaScript</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/bootstrap.png" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">Bootstrap</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/xcode-logo.png" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">xcode</h3>
        </div>
      </li>
    </ul>
  </div>
</div>`;
  util.printToDom('mainDiv', domString);
  // buttonEvents(); // eslint-disable-line no-use-before-define
};

export default { techDivBuilder };
