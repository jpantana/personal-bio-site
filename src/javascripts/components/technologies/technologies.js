// import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

import './technologies.scss';

const techDivBuilder = (e) => {
  e.preventDefault();
  const domString = `
<div id="techDiv" class="bounceIn slideInUp" style="visibility: visible; animation-delay: 0s; animation-name: slideInUp;">
  <div class="fullPage" id="technologiesPage">
    <h1 class="" id="techProf">Interests...</h1>
  </div>
    <ul class="tech-container">
      <li>
        <div class="techImgDiv">
            <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/html5.svg" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
            <h3 class="techH3">HTML5</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".15" class="techImg wow bounceIn logo-width" src="imgs/css-5.svg" style="visibility: visible; animation-delay: .5s; animation-name: pulse;">
            <h3 class="techH3">CSS3</h3>
          </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".15" class="techImg wow bounceIn logo-width sassIcon" src="imgs/sass-1.svg" style="visibility: visible; animation-delay: .5s; animation-name: pulse;">
            <h3 class="techH3">SCSS</h3>
          </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="javascriptIcon techImg wow bounceIn logo-width" src="imgs/javascript-1.svg" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">JavaScript</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="reactIcon techImg wow bounceIn logo-width" src="imgs/react.svg" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">React</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="bootstrapIcon techImg wow bounceIn logo-width" src="imgs/bootstrap-4.svg" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">Bootstrap</h3>
        </div>
      </li>
      <li>
        <div class="techImgDiv">
          <img data-wow-delay=".5s" class="techImg wow bounceIn logo-width" src="imgs/visual-studio-code-1.svg" style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;">
          <h3 class="techH3">Visual Studio Code</h3>
        </div>
      </li>
    </ul>
  </div>
</div>`;
  util.printToDom('mainDiv', domString);
  // buttonEvents(); // eslint-disable-line no-use-before-define
};

export default { techDivBuilder };
