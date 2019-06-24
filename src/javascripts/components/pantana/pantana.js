import util from '../../helpers/util';
// import img from '../../../../imgs/joshpantanablackbackground.jpg';
// import img2 from '../../../../imgs/jpantanasuit.jpg';

import './pantana.scss';

const profileImageBuilder = () => {
  const domString = `
  <div id="jpOnLoadDiv" class="wow bounceIn slideInRight" style="visibility: visible; animation-delay: 0s; animation-name: slideInRight;">
    <div id="jpOnLoadBrandDiv">
      <h1 id="jpOnLoadName">Josh</h1><span id="JPbodyHeader">Pantana</span>
      <h3 id="jpOnLoadTitle">Software Developer<h3>
    </div>
    <div id="profilePicDiv">
    </div>
  </div>`;
  util.printToDom('mainDiv', domString);
};

export default { profileImageBuilder };
